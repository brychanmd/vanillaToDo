import Storage from './storage';

export default class Task {
  constructor(name, date, priority, description, project) {
    this.id = Storage.createId();
    this.name = name;
    this.date = date;
    this.priority = priority;
    this.description = description;
    this.project = project;
    this.completed = false;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}
