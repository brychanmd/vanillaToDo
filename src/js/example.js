/**
 *
 * @param {string} textContent
 * @param {Array} classes
 * @param {function} onclick
 * @returns button element
 */
export const testButton = (textContent, classes, onclick) => {
  const button = document.createElement('button');
  button.textContent = textContent;
  if (classes.length > 0) {
    button.classList.add(classes);
  }
  if (onclick) {
    button.onclick = onclick;
  }
  return button;
};
