import PaidState from "./PaidState.js";

class PendingState {

    getStatus(){
        return "Pending";
    }

    next(){
        return new PaidState();
    }

}

export default PendingState;