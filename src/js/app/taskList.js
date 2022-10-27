import { compareAsc, compareDesc, format, isAfter, isBefore, endOfToday } from 'date-fns';
import Task from './task';

export default class TaskList {
  constructor() {
    this.tasks = [];
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(task) {
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  /**
   *
   * @param {Array<Task>} tasks
   * @param {string} method
   */
  filterTasks(tasks, method) {
    switch (method) {
      case 'upcoming':
        return tasks.filter((task) => {
          return isAfter(task.date, Date.now());
        });

      case 'today':
        return tasks.filter((task) => {
          return isBefore(task.date, endOfToday());
        });

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
