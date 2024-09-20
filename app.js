import { createInterface } from "readline";
import chalk from "chalk";
import { chownSync } from "fs";
import { log } from "console";

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
      chalk.green.bold(`La Tarea "${task}" ha sido agregada con exito\n\n`)
    );
    displayMenu();
    chooseOption();
    //console.log(tasks);
  });
}

function ListsTasks() {
  console.log(chalk.yellow.bold("\n📝📝📝📝 Tareas 📝📝📝📝\n"));
  if (tasks.length === 0) {
    console.log(chalk.bgRed("No hay tareas por hacer 😁👌\n\n"));
  } else {
    tasks.forEach((task, index) => {
      let status = task.completed ? "✅" : "❌";
      if (status) {
        console.log(chalk.greenBright(`${index + 1}.${status} -${task.task} `));
      } else {
        console.log(chalk.redBright(`${index + 1}.${status} -${task.task} `));
      }
    });
    chooseOption();
  }
}
/*function CompletedTasks() {
  if (tasks.index === 1) {
    tasks.completed == true;
  }
  console.log(`la Tarea  ha sido completada`);
  chooseOption();
}*/

function completeTask() {
  rl.question(
    chalk.bgMagentaBright("Digita el número de la Tarea a completar:"),
    (taskNumber) => {
      const index = parseInt(taskNumber) - 1;
      if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        console.log(
          chalk.green.bold("La Tarea ha sido marcada con éxito ✅\n\n")
        );
      } else {
        console.log(chalk.red.bold("Número de Tarea inválido \n\n"));
      }
      displayMenu();
      chooseOption();
    }
  );
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
        completeTask();
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
