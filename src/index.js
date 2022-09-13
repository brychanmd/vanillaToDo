// My modules.
import TaskList from '@/js/app/taskList';
import ListView from '@/js/app/listView';

// Helper modules.

// Testing modules.
import { testButton } from '@/js/example';

// Styles.
import '@/styles/index.scss';
import Task from './js/app/task';
import { addDays } from 'date-fns';

// UI things.
import htmltemplate from '@/js/ui/template';

const app = document.querySelector('#root');

/** ALL THE TEST STUFF */
if (false) {
  let number = 0;

  const taskList = new TaskList();
  const listView = new ListView();

  const logTasks = () => {
    console.log(taskList.tasks);
  };

  const addTask = () => {
    let date = addDays(Date.now(), number);
    number++;
    const task = new Task(`Task number ${number}`, date);
    taskList.addTask(task);
  };

  const removeTask = () => {
    taskList.removeTask(taskList.tasks[0]);
  };

  const sortTasksAsc = () => {
    listView.sortTasks(taskList.tasks, 'asc');
  };

  const sortTasksDesc = () => {
    listView.sortTasks(taskList.tasks, 'desc');
  };

  const filterTasksToday = () => {
    taskList.tasks = listView.filterTasks(taskList.tasks, 'today');
  };

  const filterTasksUpcoming = () => {
    taskList.tasks = listView.filterTasks(taskList.tasks, 'upcoming');
  };

  const buttons = [
    testButton('Log tasks', ['tester'], logTasks),
    testButton('Add task', [], addTask),
    testButton('Remove task', [], removeTask),
    testButton('Sort asc task', [], sortTasksAsc),
    testButton('Sort desc task', [], sortTasksDesc),
    testButton('filter today', [], filterTasksToday),
    testButton('filter upcoming', [], filterTasksUpcoming),
  ];

  const heading = document.createElement('h1');
  heading.textContent = 'Testing the page title';

  app.append(heading, ...buttons);
}

/** UI */
if (true) {
  app.innerHTML = htmltemplate;
}
