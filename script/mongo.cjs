require('dotenv').config();

const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');

const { Console } = require('console');
const { MongoClient } = require('mongodb');

const { articles, users } = require('../fixtures/index.cjs');

const console = new Console(process.stdout, process.stderr);

async function getDb() {
  const {
    DB_MONGO_HOST, DB_MONGO_PORT, DB_NAME, DB_ADMIN, DB_ADMIN_PASS,
  } = process.env;

  const encoAdmin = encodeURIComponent(DB_ADMIN);
  const encoPass = encodeURIComponent(DB_ADMIN_PASS);
  const credentials = `${encoAdmin}:${encoPass}`;
  const host = `${DB_MONGO_HOST}:${DB_MONGO_PORT}`;
  const url = `mongodb://${credentials}@${host}/${DB_NAME}`;

  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(DB_NAME);

  return [client, db];
}

let dbData = null;

async function getDbHere() {
  if (dbData) {
    return dbData;
  }
  dbData = await getDb();
  return dbData;
}

function populate(db) {
  const userCollection = db.collection('user');
  const articlesCollection = db.collection('article');

  userCollection.insertMany(users)
    .then(() => console.log('usuarios creados'));

  articlesCollection.insertMany(articles)
    .then(() => console.log('articulos creados'));
}

function drop(db) {
  const userCollection = db.collection('user');
  const articlesCollection = db.collection('article');
  userCollection.drop();
  articlesCollection.drop();
}

console.log(
  chalk.bold.magentaBright(
    figlet.textSync('Cheety Mongo', {
      font: 'Cosmike',
      horizontalLayout: 'default',
      verticalLayout: 'default',
    }),
  ),
);

const choices = {
  populate: {
    opt: {
      name: 'Create collections',
      value: 'populate',
      short: '1',
    },
    func: populate,
  },
  drop: {
    opt: {
      name: 'Drop collections',
      value: 'drop',
      short: '2',
    },
    func: drop,
  },
};

inquirer.prompt([
  {
    type: 'rawlist',
    name: 'option',
    loop: false,
    message: 'Select a operation',
    choices: Object.entries(choices).map(([, val]) => val.opt),
  },
])
  .then(async (answer) => {
    const [, db] = await getDbHere();
    choices[answer.option].func(db);
    console.log('Operation completed');
    process.exit(1);
  })
  .catch(async (err) => {
    const [client] = await getDbHere();
    console.error('Error', err);
    client.close().then(() => console.log('Conexión cerrada')).catch((err2) => console.error(err2));
    process.exit(1);
  });
