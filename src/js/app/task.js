import Storage from './storage';
import format from 'date-fns/format';

export default class Task {
  constructor(name, date, priority, description, project, id = Storage.createId()) {
    this.name = name;
    this.date = date;
    this.priority = priority;
    this.description = description;
    this.project = project;
    this.completed = false;
    this.id = id
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  getFormattedDate() {
    return format(this.date, 'dd/MM/yyyy');
  }
}
