export const view = (type) => {
  return `<div id="listview-${type.toLowerCase()}" class="content-wrapper">
  <div class="view-header">
    <h2 class="content-title">${type}</h2>
  </div>
  <div id="view-cards">
  </div>
</div>`;
};

export const link = (title, icon, active = false) => {
  return `
  <li id="listlink-${title.toLowerCase()}" class="sidebar__item listlink${
    active ? ' active' : ''
  }" data-type="${title.toLowerCase()}">
    <i class="material-icons">${icon}</i>
    ${title}
  </li>
  `;
};
