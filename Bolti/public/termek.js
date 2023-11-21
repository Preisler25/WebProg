class Termek{
    constructor(id, nev, ar, kep){
        this.id = id;
        this.nev = nev;
        this.ar = ar;
        this.kep = kep;
    }

    builder = (kosar, display) => {
        const card = document.createElement('div');
        const card_name = document.createElement('div');
        const card_price = document.createElement('div');
        const img = document.createElement('img');
        const btn = document.createElement('button');

        btn.addEventListener('click', () => {
            kosar.addProduct(this);
        });


        card_name.textContent = this.nev;
        card_price.textContent = obj.ar + ' Ft';
        img.src = 'images/' + obj.kep;
        img.alt = obj.nev;
        card.appendChild(card_name);
        card.appendChild(card_price);
        card.appendChild(img);
        card.appendChild(btn);
    
        display.appendChild(card);
    };
}

export default Termek;