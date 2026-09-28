import Order from "./Order.js";
import OrderRepository from "../data/OrderRepository.js";
import StateFactory from "../states/StateFactory.js";

class OrderService {

    static updateStatus(orderId){

        const orders =
            OrderRepository.getOrders();

        const order =
            orders.find(
                o => o.id === orderId
            );

        if(!order){
            return;
        }

        const currentState =
            StateFactory.createState(
                order.status
            );

        const nextState =
            currentState.next();

        order.status =
            nextState.getStatus();

        OrderRepository.saveOrders(
            orders
        );
    }

    static checkout(cart) {

        const orders =
            OrderRepository.getOrders();

        const total =
            cart.reduce(
                (sum, item) =>
                    sum + item.price,
                0
            );

        const order =
            new Order(
                Date.now(),
                cart,
                total,
                "Pending"
            );

        orders.push(order);

        OrderRepository.saveOrders(
            orders
        );

        localStorage.removeItem(
            "cart"
        );
    }

}

export default OrderService;