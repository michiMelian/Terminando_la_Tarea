import { createInterface } from "readline";
import chalk from "chalk";
import { chownSync } from "fs";

const tasks = [];

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log(chalk.bgBlue.bold("answer"));
  console.log(chalk.yellow.bold("TO DO App"));
  console.log(chalk.blueBright("Menu de Opciones:"));
  console.log("1.Agregar Tarea");
  console.log("2.Listar Tarea");
  console.log("3.Completar Tarea");
  console.log("4.Salir");
}

displayMenu();

function chooseoption() {
  rl.question("Digita el numero de tu Opcion", (choice) => {
    switch (choice) {
      case "1":
        console.log("Crear Tarea");
        break;
      case "2":
        console.log("Listar Tarea");
        break;
      case "3":
        console.log("Completar Tarea");
        break;
      case "4":
        console.log(chalk.yellow("Adios"));
        rl.close();
        break;
      default:
        console.log(chalk.red("Opcion Invalida, Intenta Nuevamente \n"));
        displayMenu();
        chooseoption();
        break;
    }
  });
}
