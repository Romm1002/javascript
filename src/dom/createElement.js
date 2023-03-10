const createElement = (obj) => {
  if (!('tagName' in obj)) {
    throw new Error('element should have a tagName');
  }

  const element = document.createElement(obj.tagName);

  if ('classList' in obj) {
    element.classList.add(...obj.classList);
  }

  if('id' in obj) {
    element.id = obj.id;
  }

  if ('text' in obj) {
    element.textContent = obj.text;
  }

  if ('attributes' in obj) {
    for (const [key, value] of Object.entries(obj.attributes)) {
      element.setAttribute(key, value);
    }
  }

  if ('innerHTML' in obj) {
    element.innerHTML += obj.innerHTML;
  }

  if ('children' in obj) {
    const elements = createBulkElements(obj.children);
    elements.forEach((child) => {
      element.appendChild(child);
    });
  }
  if ('eventListener' in obj) {
    element.addEventListener(obj.eventListener.event, obj.eventListener.function)
  }

  return element;
};

export const createBulkElements = (arrayOfTree) => {
  const array = [];

  arrayOfTree.forEach((child) => {
    array.push(createElement(child));
  });

  return array;
};


export default createElement
