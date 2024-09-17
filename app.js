import { createInterface } from "readline";
import chalk from "chalk";

const tasks = [];

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log(chalk.bgBlue.bold("answer"));
  console.log(chalk.yellow.bold("TO DO App"));
  console.log("1.Agregar Tarea");
  console.log("2.Listar Tarea");
  console.log("3.Completar Tarea");
  console.log("4.Salir");
}

displayMenu();
