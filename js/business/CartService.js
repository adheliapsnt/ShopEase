class CartService {

    static getCart() {
        return JSON.parse(
            localStorage.getItem("cart")
        ) || [];
    }

    static saveCart(cart) {
        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );
    }

    static addToCart(product) {

        const cart =
            this.getCart();

        cart.push(product);

        this.saveCart(cart);
    }

    static removeFromCart(id) {

        let cart =
            this.getCart();

        cart =
            cart.filter(
                item => item.id !== id
            );

        this.saveCart(cart);
    }

}

export default CartService;