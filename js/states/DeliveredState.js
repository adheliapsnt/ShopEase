class DeliveredState {

    getStatus(){
        return "Delivered";
    }

    next(){
        return this;
    }

}

export default DeliveredState;