import { compareAsc, compareDesc, format, isAfter, isBefore, endOfToday } from 'date-fns';

import { view, link } from '@/js/ui/templates/listview';
import card from '@/js/ui/templates/task';
import storage from '@/js/app/storage';
import TaskList from '@/js/app/listView';

// UI actions related to the main list views.
export function renderMenuLinks() {
  document.getElementById('inbox-list').innerHTML =
    link('All', 'all_inbox', true) + link('Upcoming', 'upcoming') + link('Overdue', 'event_busy');

  document.querySelectorAll('.listlink').forEach((elem) => {
    elem.addEventListener('click', () => {
      let type = elem.getAttribute('data-type');
      switch (type) {
        case 'all':
          console.log('All inbox clicked');
          renderAll();
          break;

        case 'upcoming':
          console.log('Upcoming inbox clicked');
          renderUpcoming();
          break;

        case 'overdue':
          console.log('Overdue inbox clicked');
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
  const inbox = new TaskList('all');
  // something
  document.getElementById('content-wrapper').innerHTML = view('All');
  const cardsDiv = document.getElementById('view-cards');
  const tasks = storage.loadData().tasks;

  console.log(tasks);

  tasks.forEach((task) => {
    cardsDiv.insertAdjacentHTML('beforeend', card(task));
  });

  // then add event listeners to cards.
}

// Render 'upcoming' inbox
export function renderUpcoming() {
  const inbox = new TaskList('upcoming');
  // something
  document.getElementById('content-wrapper').innerHTML = view('Upcoming');
  const cardsDiv = document.getElementById('view-cards');
  const tasks = storage.loadData().tasks;

  tasks.forEach((task) => {


    // use the date-fns library to check if the task is upcoming, if it is, add it to the cardsDiv.  
    if (isAfter(task.date, Date.now())) {
      cardsDiv.insertAdjacentHTML('beforeend', card(task));
    }

  });

  // then add event listeners to cards.
}

// Render 'Overdue' inbox
export function renderOverdue() {
  
}
