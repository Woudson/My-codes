const shoppingCart = [];

function addItemToCart(item){
    shoppingCart.push (item)
}

function removeItemfromCart(item){
    const index = shoppingCart.indexOf(item)
    if(index !== -1){
        shoppingCart.splice(index,1)
    }
}

function viewCart(){
 if (shoppingCart.length == 0){
    console.log("Seu carrinho esta vazio")
 } else {
    console.log(" Intens para comprar:")
    for (let i = 0; i < shoppingCart.length;i++){
        console.log(`${i + 1} - ${shoppingCart[i]}`)
    }
 }   
}

function clearCart (){
    shoppingCart.length = 0
    console.log ("Seu carrinho foi apagao")
}

addItemToCart("tenis");
addItemToCart("blusa");
addItemToCart("calça");
addItemToCart("cueca");

viewCart()
removeItemfromCart("cueca")
viewCart()