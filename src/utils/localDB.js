const getDB = () => {
    let cart;

    const existCart = localStorage.getItem("cart")
    if(existCart) {
        cart = JSON.parse(existCart)
    } else {
        cart = {}
    }

    return cart
}


const addToDB = id => {
    let cart = getDB();

    //? handle update quantity
    const quantity = cart[id]
    if(quantity) {
        const newQuantity = quantity + 1;
        cart[id] = newQuantity
    } else {
        cart[id] = 1
    }

    localStorage.setItem("cart", JSON.stringify(cart))
}

const removeFromDB = id => {
    let cart = getDB();

    //? handle quantity reduce
    const quantity = cart[id];
    if(quantity) {
        const newQuantity = quantity - 1;
        cart[id] = newQuantity
    } else if(quantity < 1) {
       delete cart[id]
    } 
    

    localStorage.setItem("cart", JSON.stringify(cart))
}

export {
    addToDB,
    removeFromDB
}

//todo: video no 47_5-6