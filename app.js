import { createInterface } from "readline";
import chalk from "chalk";
import { chownSync } from "fs";

const tasks = [];

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log(chalk.yellow.bold("TO DO App"));
  console.log(chalk.blueBright("Menu de Opciones:"));
  console.log("1.Agregar Tarea");
  console.log("2.Listar Tarea");
  console.log("3.Completar Tarea");
  console.log("4.Salir");
}

function addTask() {
  rl.question("Escribe la tarea que deseas agregar:", (task) => {
    tasks.push({ task, completed: false });
    console.log(
      chalk.green.bold(`La Tarea "${task}" ha sido agregada con exito`)
    );
    displayMenu();
    chooseOption();
    //console.log(tasks);
  });
}

function ListsTasks() {
  console.log(chalk.red.bold("/n Tareas/n"));
  tasks.forEach((task, index) => {
    let status = task.completed ? "Co" : "In";
    console.log(chalk.bgBlueBright(`${index + 1}.${status} -${task.task}`));
  });
  chooseOption();
}

function chooseOption() {
  rl.question("Digita el numero de tu Opcion:", (choice) => {
    switch (choice) {
      case "1":
        addTask();
        break;
      case "2":
        ListsTasks();
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

displayMenu();
chooseOption();
