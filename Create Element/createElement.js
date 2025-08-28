function createElement(type, props, ...children) {
  return { type: type, props: props || {}, children: children };
}

const virtualDom = createElement(
  'div',
  { id: 'app' },
  createElement('h1', { class: 'title' }, 'Hello, World!'),
  createElement('p', null, 'This is a simple virtual DOM example.'),
  createElement('span', { style: 'color: red;' }, 'Enjoy coding!'),
);

console.log(virtualDom);
