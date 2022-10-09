const template = (project) => {
  return `<div id="project-${project.id}" class="view-header">
    <h2 class="content-title">${project.title}</h2>
    <p>${project.description}</p>
  </div>`;
};

export default template;
