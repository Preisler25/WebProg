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
class TermekLista{
    constructor(display){
        this.display = display;
        this.termekLista = [];
    }

    


class Cart {
    constructor(display, ar_display) {
        this.display = display;
        this.ar_display = ar_display;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
        ar_display.textContent = this.calculateTotal();
    }

    popProduct(product) {
        this.products.pop(product);
        ar_display.textContent = this.calculateTotal();
    }

    calculateTotal() {
        let total = 0;
        for (let i = 0; i < this.products.length; i++) {
            total += this.products[i].ar;
        }
        return total;
    }
}

const display = document.querySelector('#kosar');
const ar_display = document.querySelector('#ar');
const kosar = new Cart(display);


kosar.addProduct(termek);
console.log(kosar.calculateTotal());