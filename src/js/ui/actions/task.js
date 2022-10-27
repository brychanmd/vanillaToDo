// UI actions related to the task view.
// E.G. create edit delete

import newTaskForm from 'js/ui/templates/new-task-form';

/**
 * Create new task form.
 */
export function renderNewTaskForm() {
  document.querySelector('#root').insertAdjacentHTML('beforeend', newTaskForm);
}

export function destroyNewTaskForm() {
  document.querySelector('#new-task-form').remove();
}

// Expand card

// Edit card

// Render 'Overdue'
