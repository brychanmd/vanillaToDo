export default class list {
  constructor(name) {
    this.tasks = [];
    this.name = name;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(task) {
    let index = this.categories.indexOf(task);
    this.tasks.splice(index, 1);
  }
}
