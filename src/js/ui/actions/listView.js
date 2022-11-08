import { view, link } from 'js/ui/templates/listview';

// UI actions related to the main list views.
export function renderMenuLinks() {
  document.getElementById('inbox-list').innerHTML =
    link('All', 'all_inbox', true) + link('Upcoming', 'upcoming') + link('Overdue', 'event_busy');
  document.querySelectorAll('.listlink').forEach((elem) => {
    elem.addEventListener('click', () => {
      let type = elem.getAttribute('data-type');
      switch (type) {
        case 'all':
          renderAll();
          break;

        case 'upcoming':
          renderUpcoming();
          break;

        case 'overdue':
          renderOverdue();
          break;

        default:
          renderAll();
          break;
      }
    });
  });
}

// Render 'all' inbox
export function renderAll() {
  // something
}

// Render 'upcoming'
export function renderUpcoming() {
  // something
}

// Render 'Overdue'
export function renderOverdue() {
  // something
}
