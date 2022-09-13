export default class Task {
  constructor(name, date) {
    this.name = name;
    this.date = date;
    this.completed = false;
    this.categories = [];
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

  toggleCompleted() {
    this.completed = !this.completed;
  }

  // addCategory(cat) {
  //   this.categories.push(cat);
  // }

  // removeCategory(cat) {
  //   let index = this.categories.indexOf(cat);
  //   this.categories.splice(index, 1);
  // }
}
