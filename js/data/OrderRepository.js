class OrderRepository {

    static getOrders() {

        return JSON.parse(
            localStorage.getItem("orders")
        ) || [];

    }

    static saveOrders(orders) {

        localStorage.setItem(
            "orders",
            JSON.stringify(orders)
        );

    }

}

export default OrderRepository;