class Storage {
  constructor() {
    this.data = this.loadData();
  }

  /**
   * Initialize local storage.
   */
  initializeLocalStorage() {
    let data = {
      tasks: [],
      projects: [],
      incrementor: 100,
    };
    localStorage.setItem('brychan-vanillajs-data', JSON.stringify(data));
  }

  /**
   * Load from local storage.
   *
   * @returns {{tasks: Array, projects: Array}}
   */
  loadData() {
    if (!localStorage.getItem('brychan-vanillajs-data')) {
      this.initializeLocalStorage();
    }
    return JSON.parse(localStorage.getItem('brychan-vanillajs-data'));
  }

  /**
   *  Save to local storage.
   *
   */
  saveData() {
    localStorage.setItem('brychan-vanillajs-data', JSON.stringify(this.data));
  }

  /**
   * Finds the index of item in array from its ID.
   *
   * @param {string} type
   * @param {number} ID
   *
   * @returns {number}
   */
  findIndexById(type, ID) {
    this.data[type].findIndex((object) => {
      return object.ID === ID;
    });
  }

  /**
   *
   * @param {object} project
   */
  removeProject(project) {
    this.data.projects.splice(this.findIndexById('project', project.ID), 1);
    this.saveData();
  }

  /**
   *
   * @param {object} project
   */
  addProject(project) {
    this.data.projects.push(project);
    this.saveData();
  }

  /**
   *
   * @param {object} task
   */
  removeTask(task) {
    this.data.tasks.splice(this.findIndexById('task', task.ID), 1);
    this.saveData();
  }

  /**
   *
   * @param {object} task
   */
  addTask(task) {
    this.data.tasks.push(task);
    this.saveData();
  }

  createId() {
    this.data.incrementor++;
    return this.data.incrementor;
  }
}

export default new Storage();
