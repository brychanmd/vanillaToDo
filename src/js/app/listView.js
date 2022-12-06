import { compareAsc, compareDesc, format, isAfter, isBefore, endOfToday } from 'date-fns';
import Task from './task';
import Storage from './storage';
import { view, link } from 'js/ui/templates/listview';

export default class TaskList {
  constructor(id) {
    this.id = id;
    this.tasks = this.updateTasklist();
  }

  updateTasklist() {
    this.tasks = this.filterTasks(Storage.loadData().tasks);
  }

  renderView() {
    this.updateTasklist();

    const view = view(this.id);
    const cardsDiv = view.getElementById('view-cards');

    const tasks = this.tasks;

    console.log(tasks);

    this.tasks.forEach((task) => {
      cardsDiv.insertAdjacentHTML('beforeend', card(task));
    });

    return view;
  }

  /**
   *
   * @param {Array<Task>} tasks
   * @param {string} method
   */
  filterTasks(tasks, method = this.id) {
    switch (method) {
      case 'upcoming':
        return tasks.filter((task) => {
          return isAfter(task.date, Date.now());
        });

      case 'today':
        return tasks.filter((task) => {
          return isBefore(task.date, endOfToday());
        });

      case 'all':
        return tasks;

      default:
        throw 'Invalid filter method';
    }
  }

  /**
   *
   * @param {Array<Task>} tasks
   * @param {string} method
   */
  sortTasks(tasks, method) {
    switch (method) {
      case 'asc':
        return tasks.sort((a, b) => {
          return compareAsc(a.date, b.date);
        });

      case 'desc':
        return tasks.sort((a, b) => {
          return compareDesc(a.date, b.date);
        });

      default:
        throw 'Invalid sort method';
    }
  }
}
