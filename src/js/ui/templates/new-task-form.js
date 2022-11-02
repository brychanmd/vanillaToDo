const HTML = `
<div class="mform mform__outer" id="new-task-form">
    <div class="mform__inner">
      <div class="mform__col">
        <h2>Create new task</h2>
        <i class="close-button material-icons mform__close">close</i>
      </div>
      <form id="newTaskForm">
        <div class="mform__row">
          <label for="new-task-title" class="mform__label">Title</label>
          <input id="new-task-title" type="text" name="title" class="mform__input-field" value="" autocorrect="off" required />
        </div>

        <div class="mform__row">
          <label for="new-task-date" class="mform__label">Date</label>
          <input id="new-task-date" type="date" name="date" class="mform__input-field" value="" required />
        </div>
        
        <div class="mform__row">
          <label for="new-task-description" class="mform__label">Description</label>
          <textarea id="new-task-description" type="textarea" name="description" class="mform__input-field" rows="4" /></textarea>
        </div>

        <div class="mform__row">
          <label for="new-task-project" class="mform__label">Project</label>
          <select id="new-task-project" type="project" name="project" class="mform__input-field">
            <option value="">None</option>
            <option value="102">Proj 1</option>
            <option value="110">Second project</option>
          </select>
        </div>

        <div class="mform__row">
          <button class="submit-button mform__button" type="submit">Submit</button> 
        </div>
      </form>
    </div>
</div>
`;

export default HTML;
