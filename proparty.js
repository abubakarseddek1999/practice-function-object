var shoppingCart ={
    books: 3,
    keyboard:5,
    mouse: 1,
    pen: 25
}
var penCount =shoppingCart.pen;
var penCard2 = shoppingCart['pen'];
var properties = Object.keys(shoppingCart)
var propertyValues =Object.values(shoppingCart);
console.log(properties);
console.log(propertyValues);
// console.log(shoppingCart);
// set proparty values 
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 29;
console.log(shoppingCart)