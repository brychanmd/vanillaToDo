import scaffoldingHtml from 'js/ui/templates/scaffolding';
import newTaskForm from 'js/ui/templates/new-task-form';
import newProjectForm from 'js/ui/templates/new-project-form';

import Storage from 'js/app/storage';
import Task from 'js/app/task';
import Project from 'js/app/project';

export function renderScaffolding() {
  document.querySelector('#root').innerHTML = scaffoldingHtml;
  scaffoldingEvents();
}

function scaffoldingEvents() {
  // Menu toggle.
  document.getElementById('menu-button').addEventListener('click', () => {
    console.log('Menu button clicked');
    document.getElementById('sidebar-wrapper').classList.toggle('hidden');
  });

  // Add new project button
  document.getElementById('new-project-button').addEventListener('click', () => {
    console.log('New proj button clicked');
    renderNewProjectForm();
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
    const priority = form.querySelector('#new-task-priority').value;
    const description = form.querySelector('#new-task-description').value;
    const project = form.querySelector('#new-task-project').value;

    // I need to pass the above data to localstorage.
    Storage.addTask(new Task(title, date, priority, description, project));
    destroyNewTaskForm();
  });
}

/**
 * Create new task form.
 */
function renderNewProjectForm() {
  document.querySelector('#root').insertAdjacentHTML('beforeend', newProjectForm);
  newProjectFormEvents();
}

function destroyNewProjectForm() {
  document.querySelector('#new-project-form').remove();
}

function newProjectFormEvents() {
  // Close
  document.querySelector('#new-project-form .close-button').addEventListener('click', () => {
    destroyNewProjectForm();
  });

  // Submit
  const form = document.querySelector('#new-project-form');
  form.querySelector('.submit-button').addEventListener('click', (e) => {
    e.preventDefault();

    const title = form.querySelector('#new-proj-title').value;
    const description = form.querySelector('#new-proj-description').value;

    // I need to pass the above data to localstorage.
    Storage.addProject(new Project(title, description));
    destroyNewProjectForm();
  });
}
