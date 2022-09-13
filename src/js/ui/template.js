const HTML = `
<header id="header-wrapper">
    <div class="menu">
      <button class="hamburger">
        <i class="menuIcon material-icons">menu</i>
        <i class="closeIcon material-icons">close</i>
      </button>
    </div>    
    <div class="title">
      <h1>VanillaToDo</h1>
    </div>
</header>
<div id="main">
  <aside class="sidebar" id="sidebar-wrapper">
    <div class="sidebar__group">
    <span class="sidebar__title">Inboxes</span>
      <ul id="inbox-list">
        <li class="sidebar__item active">
          <i class="material-icons">all_inbox</i>
          All
        </li>
        <li class="sidebar__item">
          <i class="material-icons">upcoming</i>
          Upcoming
        </li>
        <li class="sidebar__item">
          <i class="material-icons">event_busy</i>
          Overdue
        </li>
      </ul>
    </div>
    <div class="sidebar__group">
      <span class="sidebar__title">Projects</span>
      <ul id="project-list">
        <li class="sidebar__item active">My new project</li>
        <li class="sidebar__item">Another project</li>
      </ul>
    </div>
    <div class="sidebar__group sidebar__group--end">
    <hr>
      <ul id="project-list">
        <li class="sidebar__item active">
          <i class="material-icons">create_new_folder</i>
          New project
        </li>
        <li class="sidebar__item">
          <i class="material-icons">add_box</i>
          New task
        </li>
        <li class="sidebar__item">
          <i class="material-icons">link</i>
          Visit my GitHub
        </li>
      </ul>
    </div>
  </aside>
  <div id="content-wrapper">
    <h2>Main content</h2>
    <p>
      Lorem ipsum dolor sit amut, canis rufus doggus woofus.
    </p>
  </div>
</div>
`;

export default HTML;
