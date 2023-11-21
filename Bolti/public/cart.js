class Cart {
    constructor(display) {
        this.display = display;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    popProduct(product) {
        this.products.pop(product);
    }

    calculateTotal() {
        let total = 0;
        for (let i = 0; i < this.products.length; i++) {
            total += this.products[i].ar;
        }
        return total;
    }
}

export default Cart;