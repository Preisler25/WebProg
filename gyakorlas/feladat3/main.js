document.addEventListener('DOMContentLoaded', () => {
    const todo_list = document.querySelector('#todo_list');
    todo_list.classList.add('text-white', 'font-bold', 'text-xl', 'list-decimal', 'list-inside', 'bg-gray-800', 'p-4', 'rounded');

    const new_todo_inp = document.querySelector('#new_todo_element');
    const new_todo = document.querySelector('#add_todo');

    new_todo.addEventListener('click', () => {
        if (new_todo_inp.value === '') {
            return;
        }
        const todo = document.createElement('li');
        todo_list.appendChild(todo);

        const todo_text = document.createElement('span');
        todo.appendChild(todo_text);
        todo_text.textContent = new_todo_inp.value;
        todo_text.style.marginRight = '10px';

        const todo_done_btn = document.createElement('button');
        todo.appendChild(todo_done_btn);
        todo_done_btn.classList.add('btn', 'bg-green-700', 'hover:bg-green-800', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');
        todo_done_btn.textContent = 'Done';
        todo_done_btn.addEventListener('click', () => {
            todo.remove();
        });

        new_todo_inp.value = '';
    });
});