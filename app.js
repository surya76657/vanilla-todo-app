const formId = document.getElementById('add-item');
console.log(formId);
formId?.addEventListener('submit', handleAdd);
const list = document.getElementById('list');
function handleAdd(e) {
  e.preventDefault();
  const input = document.getElementById('new-item');
  const newValue = input.value;
  if (newValue) {
    const item = document.createElement('li');
    item.innerHTML = `
        <span>${newValue}</span>
        <button id="delete">Delete</button>
        <button id="completed">Completed</button>
    ` ;
    item.classList.add('todo-listitem')
    list.appendChild(item);
    input.value = '';
  }
}
list.addEventListener('click', handleDelete);
function handleDelete(e) {
  if (e.target.id === 'delete')
    e.target.parentNode.remove();
}

list.addEventListener('click', handleCompleted);
function handleCompleted(e) {
  if (e.target.id === 'completed')
    e.target.parentNode.querySelector('span').classList.toggle('completed');
}

document.getElementById('clear-all').addEventListener('click', () => {
  list.innerText = ""
});
