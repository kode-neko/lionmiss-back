require('dotenv').config();
const { Console } = require('console');
const mysql = require('mysql');
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');

// const { articlesFix, usersFix } = require('../fixtures/index.cjs');
const articlesFix = require('../fixtures/articles.json');
const usersFix = require('../fixtures/users.json');

const console = new Console(process.stdout, process.stderr);

const {
  DB_NAME, DB_ADMIN, DB_ADMIN_PASS, DB_SQL_HOST, DB_SQL_PORT,
} = process.env;

let con;

function getCon() {
  if (!con) {
    con = mysql.createConnection({
      host: DB_SQL_HOST,
      port: DB_SQL_PORT,
      user: DB_ADMIN,
      password: DB_ADMIN_PASS,
      database: DB_NAME,
    });
  }
  return con;
}

async function errorPromise(sentence) {
  return new Promise((resolve, reject) => {
    getCon().query(sentence, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

async function queryPromise(sentence, values) {
  return new Promise((resolve, reject) => {
    getCon().query(sentence, values, (err, result, fields) => {
      if (err) reject(err);
      resolve({ result, fields });
    });
  });
}

function drop() {
  const dropTables = 'DROP TABLE IF EXISTS article_line, tag_article, tag, article, user';

  errorPromise(dropTables)
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log('Success dropping...');
      getCon().end();
    });
}

function create() {
  const createUser = `
    CREATE TABLE IF NOT EXISTS user(
      name VARCHAR(50) NOT NULL,
      email VARCHAR(75) NOT NULL UNIQUE,
      pass VARCHAR(100) NOT NULL,

      PRIMARY KEY(name)
    )
  `;
  const createArticle = `
    CREATE TABLE IF NOT EXISTS article(
      id INT UNSIGNED AUTO_INCREMENT,
      title VARCHAR(75),
      author VARCHAR(50) NOT NULL,

      PRIMARY KEY(id),
      CONSTRAINT fk_user
        FOREIGN KEY(author) REFERENCES user(name)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    )
  `;
  const createArticleLine = `
    CREATE TABLE IF NOT EXISTS article_line(
      id INT UNSIGNED AUTO_INCREMENT,
      content TINYTEXT,
      lang VARCHAR(2) NOT NULL,
      article INT UNSIGNED NOT NULL,

      PRIMARY KEY(id),
      CONSTRAINT fk_article
        FOREIGN KEY(article) REFERENCES article(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    )
  `;
  const createTag = `
    CREATE TABLE IF NOT EXISTS tag(
      name varchar(20) NOT NULL,

      PRIMARY KEY(name)
    )
  `;
  const createTagArticle = `
    CREATE TABLE IF NOT EXISTS tag_article(
      article INT UNSIGNED,
      tag VARCHAR(20),
      
      PRIMARY KEY(article, tag),
      CONSTRAINT fk_ta_article
        FOREIGN KEY(article) REFERENCES article(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
      CONSTRAINT fk_ta_tag
        FOREIGN KEY(tag) REFERENCES tag(name)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    )
  `;

  errorPromise(createUser)
    .then(() => errorPromise(createArticle))
    .then(() => errorPromise(createArticleLine))
    .then(() => errorPromise(createTag))
    .then(() => errorPromise(createTagArticle))
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log('Success creation!');
      getCon().end();
    });
}

async function populateUser() {
  const insertArticle = 'INSERT INTO user SET ?';
  const promises = usersFix.map((ele) => (
    queryPromise(insertArticle, ele)
  ));
  return Promise.all(promises);
}

async function populateArticle() {
  const insertArticle = 'INSERT INTO article SET ?';
  const articlesId = await Promise.all(articlesFix.map(async (ele) => {
    const article = { title: ele.title, author: ele.author };
    const { result } = await queryPromise(insertArticle, article);
    return { id: result.insertId, ...ele };
  }));
  return Promise.resolve(articlesId);
}

async function populateArticleLine(articlesId) {
  const insertArticleLine = 'INSERT INTO article_line SET ?';
  const promises = [];
  articlesId.forEach((art) => {
    const part = { lang: art.lang, article: art.id };
    if (art.content instanceof Array) {
      const lines = art.content.map((c) => (
        queryPromise(insertArticleLine, { ...part, content: c })
      ));
      promises.push(lines);
    } else {
      promises.push(queryPromise(insertArticleLine, { ...part, content: art.content }));
    }
  });
  return Promise.all(promises.reduce((prev, act) => (
    act instanceof Array ? [...prev, ...act] : [...prev, act]
  ), []));
}

async function populateTag() {
  const insertTag = 'INSERT INTO tag SET ?';
  let tagList = [];
  articlesFix.forEach((art) => {
    const tags = art.tags.filter((tag) => !tagList.find((tl) => tl === tag));
    tagList = [...tagList, ...tags];
  });
  const promises = tagList.map((t) => queryPromise(insertTag, { name: t }));
  return Promise.all(promises);
}

async function populateTagArticle(articlesId) {
  const insertTagArticle = 'INSERT INTO tag_article SET ?';
  const promises = articlesId.map((art) => art.tags.map((tag) => (
    queryPromise(insertTagArticle, { tag, article: art.id })
  )));
  const promisesFlat = promises.reduce((prev, act) => (
    act instanceof Array ? [...prev, ...act] : [...prev, act]
  ), []);
  await Promise.all(promisesFlat);
}

function populate() {
  let articlesId;
  populateUser()
    .then(populateArticle)
    .then((list) => { articlesId = list; populateArticleLine(articlesId); })
    .then(() => populateTag())
    .then(() => populateTagArticle(articlesId))
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log('Success inserting!');
      getCon().end();
    });
}

const choices = {
  create: {
    opt: {
      name: 'Create Tables',
      value: 'create',
      short: '1',
    },
    func: create,
  },
  populate: {
    opt: {
      name: 'Populate Tables',
      value: 'populate',
      short: '2',
    },
    func: populate,
  },
  drop: {
    opt: {
      name: 'Drop Tables',
      value: 'drop',
      short: '3',
    },
    func: drop,
  },
};

console.log(
  chalk.bold.magentaBright(
    figlet.textSync('Cheety SQL', {
      font: 'AMC Razor2',
      horizontalLayout: 'default',
      verticalLayout: 'default',
    }),
  ),
);

inquirer.prompt([
  {
    type: 'rawlist',
    name: 'option',
    loop: true,
    message: 'Select a DB operation',
    choices: Object.entries(choices).map(([, val]) => val.opt),
  },
])
  .then(async (answer) => {
    await choices[answer.option].func();
  });
