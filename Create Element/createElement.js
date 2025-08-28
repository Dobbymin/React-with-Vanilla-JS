function createElement(type, props, ...children) {
  return { type: type, props: props || {}, children: children };
}

const virtualDom = createElement(
  'div',
  { id: 'container' },
  createElement('h2', null, 'Article Title'),
  createElement('p', null, 'This is first paragraph.'),
);

console.log(virtualDom);
