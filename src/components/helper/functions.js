const isInCart = (state,id) =>{
    const result = !!state.selectedItems.find(item => item.id === id);
    return result;
}
const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    if (index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity;
    }
}

const priceFormat = (value) => {
    const formatValue =Intl.NumberFormat("en-us" , {
        notation: "standard",
        maximumFractionDigits:3,

    }).format(value);
    return formatValue;
 };


export {isInCart , quantityCount , priceFormat};