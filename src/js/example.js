/**
 *
 * @param {string} classes
 * @param {function} onclick
 * @returns button element
 */
export const testButton = (textContent, classes, onclick) => {
  const button = document.createElement('button');
  button.textContent = textContent;
  button.classList.add(classes);
  if (onclick) {
    button.onclick = onclick;
  }
  return button;
};
