import Cart from './cart.js';
import Termek from './termek.js';

const display = document.querySelector('#kosar');
const kosar = new Cart(display);
const termek = new Termek(1, 'Kenyér', 200, 'kenyer.jpg');

kosar.addProduct(termek);