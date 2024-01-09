document.addEventListener('DOMContentLoaded', () => {

    const main = document.querySelector('#main');

    const btnCr = document.createElement('button');
    main.appendChild(btnCr);
    btnCr.textContent = 'Új gomb!';
    btnCr.addEventListener('click', () => {
        const btn = document.createElement('button');
        main.appendChild(btn);
        btn.textContent = 'Számláló';
        let counter = 0;
        btn.addEventListener('click', () => {
            counter++;
            btn.textContent = 'Számláló: ' + counter;
        });
    });
});