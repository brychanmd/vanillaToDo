// UI actions related to the task view.
// E.G. create edit delete

import editTaskForm from 'js/ui/templates/edit-task-form';

/**
 * Create new task form.
 */
export function renderEditTaskForm() {
  document.querySelector('#root').insertAdjacentHTML('beforeend', editTaskForm);
}

export function destroyEditTaskForm() {
  document.querySelector('#edit-task-form').remove();
}

// Expand card

// Edit card

// Render 'Overdue'
