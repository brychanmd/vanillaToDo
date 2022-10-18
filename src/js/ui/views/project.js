const template = (project) => {
  return `<div id="project-${project.id}" class="content-wrapper">
  <div class="view-header">
    <h2 class="content-title">${project.title}</h2>
    <p>${project.description}</p>
  </div>
  <div class="view-cards">
  </div>
</div>`;
};

export default template;
