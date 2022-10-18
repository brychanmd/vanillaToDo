const HTML = `
<div class="mform mform__outer" id="new-project-form">
    <div class="mform__inner">
      <div class="mform__col">
        <h2>Create new project</h2>
        <i class="material-icons mform__close">close</i>
      </div>
      <form>
        <div class="mform__row">
          <label for="new-proj-title" class="mform__label">Title</label>
          <input id="new-proj-title" type="text" name="title" class="mform__input-field" value="" autocorrect="off" required />
        </div>
        
        <div class="mform__row">
          <label for="new-proj-description" class="mform__label">Description</label>
          <textarea id="new-proj-description" type="textarea" name="description" class="mform__input-field" />

          </textarea>
        </div>

        <div class="mform__row">
          <button class="mform__button" type="submit">Submit</button> 
        </div>
      </form>
    </div>
</div>
`;

export default HTML;
