export default class task {
  constructor(name, date) {
    this.name = name;
    this.date = date;
    this.completed = false;
    this.categories = [];
  }

  set name(name) {
    this.name = name;
  }

  get name() {
    return this.name;
  }

  set date(date) {
    this.date = date;
  }

  get date() {
    return this.date;
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
