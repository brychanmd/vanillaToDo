export default class Task {
  constructor(id, name, date) {
    this.id = id;
    this.name = name;
    this.date = date;
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
