document.addEventListener('DOMContentLoaded', () => {
    const todo_list = document.querySelector('#todo_list');

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

        const todo_del_btn = document.createElement('button');
        todo.appendChild(todo_del_btn);
        todo_del_btn.textContent = 'del';
        todo_del_btn.addEventListener('click', () => {
            todo.remove();
        });

        new_todo_inp.value = '';
    });
});