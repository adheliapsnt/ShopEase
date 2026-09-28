import DeliveredState from "./DeliveredState.js";

class ShippedState {

    getStatus(){
        return "Shipped";
    }

    next(){
        return new DeliveredState();
    }

}

export default ShippedState;