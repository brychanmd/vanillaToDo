import list from './list';

export default class inbox extends list {
  /**
   *
   * @param {string} date
   */
  filterTasks(date) {
    switch (date) {
      case 'today':
        // do something
        break;

      case 'week':
        // do something
        break;

      default:
        break;
    }
  }
}
