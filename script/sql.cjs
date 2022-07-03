require('dotenv').config();
const { Console } = require('console');
const mysql = require('mysql');
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');

const { articlesFix, usersFix } = require('../fixtures/index.cjs');

const console = new Console(process.stdout, process.stderr);

const {
  DB_NAME, DB_ADMIN, DB_ADMIN_PASS, DB_SQL_HOST, DB_SQL_PORT, DB_USER, DB_USER_PASS,
} = process.env;

const con = mysql.createConnection({
  host: DB_SQL_HOST,
  port: DB_SQL_PORT,
  user: DB_ADMIN,
  pass: DB_ADMIN_PASS,
  database: DB_NAME,
});

function errorMsg(err) {
  if (err) { console.error('error: ', err); return; }
  console.log('success');
}

async function errorPromise(sentence) {
  return new Promise((resolve, reject) => {
    con.query(sentence, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

async function queryPromise(sentence, values) {
  return new Promise((resolve, reject) => {
    con.query(sentence, values, (err, result, fields) => {
      if (err) reject(err);
      resolve({ result, fields });
    });
  });
}

con.connect(errorMsg);

con.end(errorMsg);

console.log(
  chalk.bold.magentaBright(
    figlet.textSync('Cheety SQL', {
      font: 'AMC Razor2',
      horizontalLayout: 'default',
      verticalLayout: 'default',
    }),
  ),
);

function drop() {
  const dropTables = 'DROP TABLE IF EXISTS article, article_line, tag, tag_article';
  const dropDB = 'DROP DATABASE IF EXISTS cheety';

  errorPromise(dropTables)
    .then(() => errorPromise(dropDB))
    .catch((err) => {
      console.error(err);
      drop();
    })
    .finally(() => con.end());
}

function create() {
  const createDb = 'CREATE DATABASE WITH NOT EXISTS cheety';
  const createUser = `
    CREATE TABLE IF NOT EXISTS user(
      email VARCHAR(75) NOT NULL;
      pass VARCHAR(20) NOT NULL;

      PRIMARY KEY(email);
    )
  `;
  const createArticle = `
    CREATE TABLE IF NOT EXISTS article(
      id INT UNSIGNED AUTO_INCREMENT;
      title VARCHAR(75);
      author VARCHAR(75) NOT NULL;

      PRIMARY KEY(id);
      CONSTRAINT fk_user
        FOREIGN KEY(author) REFERENCES user(email)
        ON DELETE CASCADE
        ON UPDATE CASCADE;
    )
  `;
  const createArticleLine = `
    CREATE TABLE IF NOT EXISTS article_line(
      id INT UNSIGNED AUTO_INCREMENT;
      content TINYTEXT;
      lang VARCHAR(2) NOT NULL;
      article INT NOT NULL;

      PRIMARY KEY(id);
      CONSTRAINT fk_article
        FOREIGN KEY(article) REFRENCES article(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE;
    )
  `;
  const createTag = `
    CREATE TABLE IF NOT EXISTS tag(
      name varchar(20) NOT NULL;

      PRIMARY KEY(name);
    )
  `;
  const createTagArticle = `
    CREATE TABLE IF NOT EXISTS tag_article(
      article INT;
      tag VARCHAR(20);
      
      PRIMARY KEY(article, tag);
      CONSTRAINT fk_article
        FOREIGN KEY(article) REFERNCES article(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE;
      CONTRAINT fk_tag
        FOREIGN KEY(tag) REFERENCES tag(name)
        ON DELETE CASCADE
        ON UPDATE CASCADE;
    )
  `;

  errorPromise(createDb)
    .then(() => errorPromise(createUser))
    .then(() => errorPromise(createArticle))
    .then(() => errorPromise(createArticleLine))
    .then(() => errorPromise(createTag))
    .then(() => errorPromise(createTagArticle))
    .catch((err) => {
      console.error(err);
      drop();
    })
    .finally(() => con.end());
}

async function populateUser() {
  const insertUser = 'INSERT INTO user(email, pass) VALUES ?';
  await queryPromise(insertUser, usersFix);
}

async function populateArticle() {
  const insertArticle = 'INSERT INTO article(title, author) VALUES ?';
  const values = articlesFix.map((ele) => ({ title: ele.title, author: ele.author }));
  const ids = await queryPromise(insertArticle, values);
  return values.map((art, i) => ({ id: ids[i], ...art }));
}

async function populateArticleLine(articlesId) {
  const insertArticleLine = 'INSERT INTO article_line(content, lang, article) VALUES ?';
  const values = articlesId.map((ele) => {
    const part = { lang: ele.lang, article: ele.id };
    const lines = ele.content instanceof Array
      ? ele.content.map((line) => ({ ...part, content: line.content }))
      : { ...part, content: ele.content };
    const flatLines = lines.flat();
    return flatLines;
  });
  await queryPromise(insertArticleLine, values);
}

async function populateTag() {
  const insertTag = 'INSERT INTO tag(name) VALUES ?';
  const tagList = [];
  articlesFix.foreach((art) => {
    const tags = art.tags.filter((tag) => tagList.find((tl) => tl === tag));
    tagList.push(tags);
  });
  const values = tagList.map((t) => ({ name: t }));
  await queryPromise(insertTag, values);
}

async function populateTagArticle(articlesId) {
  const insertTagArticle = 'INSERT INTO tag_article(article, tag) VALUES ?';
  const values = articlesId.map((art) => art.tags.map((tag) => ({ tag, article: art.id })));
  const valuesFlat = values.flat();
  await queryPromise(insertTagArticle, valuesFlat);
}

function populate() {
  let articlesId;

  populateUser()
    .then(() => populateArticle())
    .then((list) => { articlesId = list; populateArticleLine(articlesId); })
    .then(() => populateTag())
    .then(() => populateTagArticle(articlesId))
    .catch((err) => {
      console.error(err);
      drop();
    })
    .finally(() => con.end());
}

function user() {
  const createUser = 'CREATE USER IF NOT EXISTS ?@? IDENTIFIED BY ?';
  const priviUser = 'GRANT SELECT, INSERT, UPDATE, DELETE ON cheety.* TO ?@?';
  con.query(createUser);
  con.query(priviUser);
}

const choices = {
  create: {
    opt: {
      name: 'Create Database',
      value: 'create',
      short: '1',
    },
    func: create,
  },
  populate: {
    opt: {
      name: 'Populate Database',
      value: 'create',
      short: '1',
    },
    func: populate,
  },
  delete: {
    opt: {
      name: 'Drop Database',
      value: 'drop',
      short: '3',
    },
    func: drop,
  },
  user: {
    opt: {
      name: 'User Database',
      value: 'user',
      short: '4',
    },
    func: user,
  },
};

inquirer.prompt([
  {
    type: 'rawlist',
    name: 'option',
    loop: false,
    message: 'Select a DB operation',
    choices: Object.entries(choices).map(([_, val]) => val.opt),
  },
])
  .then(async (answer) => {
    await choices[answer.option].func();
  });
