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
}
