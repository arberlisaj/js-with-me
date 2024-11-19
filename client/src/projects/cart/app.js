const filterInput = document.getElementById('filterInput');
const addInput = document.getElementById('addInput');
const itemList = document.getElementById('itemList');

const getItems = () => JSON.parse(localStorage.getItem('items')) || [];

const setItems = (items) =>
  localStorage.setItem('items', JSON.stringify(items));

const renderItems = (filter = '') => {
  const items = getItems();
  itemList.innerHTML = '';
  items
    .filter((item) => item.toLowerCase().includes(filter.toLowerCase()))
    .forEach((item, index) => {
      const li = document.createElement('li');

      const span = document.createElement('span');
      span.textContent = item;
      span.className = 'editable';
      span.contentEditable = false;
      span.addEventListener('click', () => {
        span.contentEditable = true;
        span.focus();
      });
      span.addEventListener('blur', () => {
        span.contentEditable = false;
        items[index] = span.textContent.trim();
        setItems(items);
        renderItems(filterInput.value);
      });

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete';
      deleteButton.addEventListener('click', () => {
        items.splice(index, 1);
        setItems(items);
        renderItems(filterInput.value);
      });

      li.appendChild(span);
      li.appendChild(deleteButton);
      itemList.appendChild(li);
    });
};

addInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && addInput.value.trim()) {
    const items = getItems();
    items.push(addInput.value.trim());
    setItems(items);
    addInput.value = '';
    renderItems(filterInput.value);
  }
});

filterInput.addEventListener('input', () => renderItems(filterInput.value));

renderItems();
