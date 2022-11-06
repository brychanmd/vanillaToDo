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
    this.project = null;
  }

  set name(newName) {
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  set date(newDate) {
    this._date = newDate;
  }

  get date() {
    return this._date;
  }

  set project(projectId) {
    this._project = projectId;
  }

  get project() {
    return this._project;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}
