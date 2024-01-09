//feladat 1
document.addEventListener('DOMContentLoaded', () => {

    const main = document.querySelector('#main')

    const createBtn = () => {
        const btn = document.createElement('button')
        main.appendChild(btn)
        btn.textContent = 'Kattints rám!'
        btn.addEventListener('click', () => createBtn())
    }

    createBtn()
})