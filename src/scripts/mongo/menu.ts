/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/typedef */
import * as dotenv from "dotenv";
import getDb from "./dbConnection";
import chalk from "chalk";
import figlet from "figlet";
import inquirer from "inquirer";
import options from "./logicMenu";

dotenv.config();

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
    const [client, db] = await getDb();
    await options[answer.option as string]
      .func(db)
      .then(() => console.log("Operation completed"))
      .catch((err) => console.log("There was an error", err))
      .finally(() =>
        client.close().then(() => console.log("Client close connection"))
      );
  });
