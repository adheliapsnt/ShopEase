import ShippedState from "./ShippedState.js";

class PaidState {

    getStatus(){
        return "Paid";
    }

    next(){
        return new ShippedState();
    }

}

export default PaidState;