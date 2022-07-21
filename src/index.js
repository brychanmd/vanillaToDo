// My modules.
import TaskList from '@/js/taskList';
import ListView from '@/js/listView';

// Helper modules.

// Testing modules.
import { testButton } from '@/js/example';

// Styles.
import '@/styles/index.scss';
import Task from './js/task';

let number = 0;

const taskList = new TaskList();

const logTasks = () => {
  console.log(taskList.tasks);
};

const addTask = () => {
  number++;
  const task = new Task(`Task number ${number}`, 'random-date-2022');
  taskList.addTask(task);
};

const removeTask = () => {
  taskList.removeTask(taskList.tasks[0]);
};

const logger = testButton('Log tasks', ['tester'], logTasks);
const addTaskBtn = testButton('Add task', [], addTask);
const removeTaskBtn = testButton('Remove task', [], removeTask);

const heading = document.createElement('h1');
heading.textContent = 'Testing the page title';

const app = document.querySelector('#root');
app.append(heading, logger, addTaskBtn, removeTaskBtn);
