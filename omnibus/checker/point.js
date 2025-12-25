const root = document.getElementById('point-root');
const list = [];
const Component = {
  view: () => {
    return [
      m('h1', 'point'),
      m('textarea', {class: 'point-list'}, list.join("\n")),
      m('div#mask')
    ];
  }
};
m.mount(root, Component);


// containerの子要素にonclickイベントの付与
const container = document.getElementById('container');
const mask = document.getElementById('mask');
container.addEventListener('click', onClickItem);
function onClickItem(e) {
  const containerRect = container.getBoundingClientRect();

  const elem = e.target;
  const elemRect = elem.getBoundingClientRect();
  const x = elemRect.left - containerRect.left + (elemRect.width / 2);
  const y = elemRect.top - containerRect.top + (elemRect.height / 2);

  mask.style.left = `${elemRect.left + window.pageXOffset}px`;
  mask.style.top = `${elemRect.top + window.pageYOffset}px`;
  mask.style.width = `${elemRect.width}px`;
  mask.style.height = `${elemRect.height}px`;
  mask.style.display = 'block';

  list.push(`[${elem.className ? '.' + elem.className.split(' ').join('.') : ''}${elem.id ? '#' + elem.id : ''}] x: ${x}, y: ${y}, w: ${elemRect.width}, h: ${elemRect.height}`);
  m.redraw();
}
