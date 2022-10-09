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
          <a href="https://www.github.com/brychanmd">
          <i class="material-icons">link</i>
          Visit my GitHub
          </a>
        </li>
      </ul>
    </div>
  </aside>
  <div id="content-wrapper">
    <div class="view-header">
      <h2 class="content-title">Inbox</h2>
      <p>Lorem ipsum dolor sit amut, canis rufus doggus woofus.  Project deadline will be at this time.  It is vitally important to the continuing prosperity of my illustrious career.</p>
    </div>
    <div class="view-cards">

    <div class="card priority-high">
      <div class="card__header">

        <h3 class="card__title">My first task</h3>
          
        <div class="buttons">
          <span>12 Jun</span>
          <button><span class="align-middle">Details </span><i class="material-icons align-middle">keyboard_arrow_down</i></button>
          <button> <i class="material-icons">edit</i></button>
          <button> <i class="material-icons">delete</i></button>
        </div>
      </div>
      <div class="card__description">
        <p>Lorem ipsum dolor sit amut canis rufus doggus woofus</p>
      </div>
    </div>

    <div class="card priority-low">
      <div class="card__header">

        <h3 class="card__title">My second task</h3>
          
        <div class="buttons">
          <span>12 Jun</span>
          <button>Details <i class="material-icons">keyboard_arrow_down</i></button>
          <button> <i class="material-icons">edit</i></button>
          <button> <i class="material-icons">delete</i></button>
        </div>
      </div>
      <div class="card__description expanded">
        <p>Lorem ipsum dolor sit amut canis rufus doggus woofus</p>
      </div>
    </div>

    </div>
  </div>
</div>
`;

export default HTML;
