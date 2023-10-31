let button = document.querySelector('#transformation');
let all_b = document.querySelectorAll('main b');
let p = document.querySelectorAll('p');
let section = document.querySelectorAll('section');
let colors = ['red', 'green', 'blue'];

button.addEventListener('click', () => {
    for (let i = 0; i < all_b.length; i++) {
        all_b[i].style.fontWeight = 'normal';
        all_b[i].style.color = colors[Math.floor(Math.random() * 3)];
    }

    for (let i = 0; i < p.length; i++) {
        p[i].innerHTML += ` (${p[i].innerHTML.length})`;
    }

    for (let i = 0; i < section.length; i++) {
        section[i].classList.add(`mb-${(i+1) * 5}`);
    }
});
