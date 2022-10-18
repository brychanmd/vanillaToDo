export default class Storage {
  constructor() {
    if (!localStorage.getItem('brychan-vanillajs-data')) {
      this.data = {
        tasks: [],
        projects: [],
      };
    } else {
      this.data = localStorage.getItem('brychan-vanillajs-data');
    }
  }

  /**
   *
   * @param {{tasks: Array, projects: Array}} data
   */
  saveData(data) {
    this.data = JSON.stringify(data);
  }

  /**
   *
   * @returns {{tasks: Array, projects: Array}}
   */
  loadData() {
    return JSON.parse(this.data);
  }
}
