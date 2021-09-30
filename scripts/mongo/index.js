require("dotenv").config();
const { getDb } = require("./dbConnection");
const chalk = require("chalk");
const figlet = require("figlet");
const inquirer = require("inquirer");
const { options } = require("./logicMenu");

let dbData = null;

async function getDbHere() {
  if (dbData) {
    return dbData;
  }
  dbData = await getDb();
  return dbData;
}

console.log(
  chalk.bold.magentaBright(
    figlet.textSync("Lion Miss DB", {
      font: "Cosmike",
      horizontalLayout: "default",
      verticalLayout: "default",
    })
  )
);

inquirer
  .prompt([
    {
      type: "rawlist",
      name: "option",
      loop: false,
      message: "Select a DB operation",
      choices: Object.entries(options).map(([_, val]) => val.opt),
    },
  ])
  .then(async (answer) => {
    const [client, db] = await getDbHere();
    await options[answer.option]
      .func(db)
      .then(() => console.log("Operation completed"))
      .catch(err => console.log("There was an error", err))
      .finally(() =>
        client.close().then(() => console.log("Client close connection"))
      );
  });
