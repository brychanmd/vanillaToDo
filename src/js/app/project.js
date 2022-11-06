import Storage from './storage';

export default class Project {
  constructor(name, description) {
    this.id = Storage.createId();
    this.name = name;
    this.description = description;
  }
}
