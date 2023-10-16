import { toast } from "react-toastify";


const addItem = product => {
    toast.success("سفارش اضافه شد")
    return {
        type: "ADD_ITEM",
        payload: product
    }
}

const increaseItem = product => {
    return {
        type: "INCREASE_ITEM",
        payload: product
    }
}

const removeItem = product => {
    toast.error("سفارش حذف شد")

    return {
        type: "REMOVE_ITEM",
        payload: product
    }
}


const decreaseItem = product => {
    return {
        type: "DECREASE_ITEM",
        payload: product
    }
}

const checkout = () => {
    return {
        type: "CHECKOUT",
    }
}

const clear = () => {
    return {
        type: "CLEAR",
    }
}

export { addItem, removeItem, increaseItem, decreaseItem, checkout, clear };


