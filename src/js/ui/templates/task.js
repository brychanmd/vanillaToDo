const template = (task) => {
  return `
  <div id="task-${task.id}" class="card priority-${task.priority}">
      <div class="card__header">

        <h3 class="card__title">${task.name}</h3>
          
        <div class="buttons">
          <span>${task.date}</span>
          <button><span class="align-middle">Details </span><i class="material-icons align-middle">keyboard_arrow_down</i></button>
          <button> <i class="material-icons">edit</i></button>
          <button> <i class="material-icons">delete</i></button>
        </div>
      </div>
      <div class="card__description">
        <p>${task.description}</p>
      </div>
    </div>`;
};

export default template;
