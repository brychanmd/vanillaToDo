import scaffoldingHtml from 'js/ui/templates/scaffolding';
import newTaskForm from 'js/ui/templates/new-task-form';

export function renderScaffolding() {
  document.querySelector('#root').innerHTML = scaffoldingHtml;
  scaffoldingEvents();
}

function scaffoldingEvents() {
  // Menu toggle.
  document.getElementById('menu-button').addEventListener('click', () => {
    console.log('Menu button clicked');
  });

  // Add new project button
  document.getElementById('new-project-button').addEventListener('click', () => {
    console.log('New proj button clicked');
  });

  // Add new task button
  document.getElementById('new-task-button').addEventListener('click', () => {
    console.log('New task button clicked');
    renderNewTaskForm();
  });
}

/**
 * Create new task form.
 */
function renderNewTaskForm() {
  document.querySelector('#root').insertAdjacentHTML('beforeend', newTaskForm);
  newTaskFormEvents();
}

function destroyNewTaskForm() {
  document.querySelector('#new-task-form').remove();
}

function newTaskFormEvents() {
  // Close
  document.querySelector('#new-task-form .close-button').addEventListener('click', () => {
    destroyNewTaskForm();
  });

  // Submit
  const form = document.querySelector('#new-task-form');
  form.querySelector('.submit-button').addEventListener('click', (e) => {
    e.preventDefault();

    const title = form.querySelector('#new-task-title').value;
    const date = form.querySelector('#new-task-date').value;
    const description = form.querySelector('#new-task-description').value;
    const project = form.querySelector('#new-task-project').value;

    // I need to pass the above data to localstorage.
  });
}
