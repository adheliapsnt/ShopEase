import PendingState from "./PendingState.js";
import PaidState from "./PaidState.js";
import ShippedState from "./ShippedState.js";
import DeliveredState from "./DeliveredState.js";

class StateFactory {

    static createState(status){

        switch(status){

            case "Pending":
                return new PendingState();

            case "Paid":
                return new PaidState();

            case "Shipped":
                return new ShippedState();

            case "Delivered":
                return new DeliveredState();

            default:
                return new PendingState();
        }
    }
}

export default StateFactory;