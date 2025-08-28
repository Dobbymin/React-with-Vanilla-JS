function createElement(type, props, ...children) {
  return { type: type, props: props || {}, children: children };
}

const virtualDom = createElement(
  'div',
  { id: 'app' },
  createElement('h1', { class: 'title' }, 'Hello, World!'),
  createElement('p', null, 'This is a simple virtual DOM example.'),
);

console.log(virtualDom);
