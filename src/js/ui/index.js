// initialize everything here.
import scaffolding from 'js/ui/templates/scaffolding';
import * as taskUi from 'js/ui/actions/task';

function initialize() {
  const app = document.querySelector('#root');
  app.innerHTML = scaffolding;

  taskUi.renderNewTaskForm();
  taskUi.destroyNewTaskForm();
}

export default initialize;
