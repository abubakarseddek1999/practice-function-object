
var shoppingCart =['books', 'sunglass', 'pen']
var friendsAge =[12, 45, 78, 12, 32, 14]
var friendsAge = {
    rahim: 12,
    samad:45,
    karim: 78,
    jamal:12,
    robi: 32,
    kajzi:14,

}

var shoppingCart ={
    books: 3,
    sunglass: 1,
    keyboard:5,
    mouse: 1,
    pen: 25
}
var keys =Object.keys(shoppingCart);
console.log(keys);

var values =Object.values(shoppingCart);
console.log(values);

for (var i =0; i< keys.length; i++){
    var propartyName = keys[i];
    var propertyValue = shoppingCart[propartyName];
    // console.log(propartyName,propertyValue)
}

// for in loop
for (var propartyName in  shoppingCart){
    var value = shoppingCart[propartyName];
    console.log(propartyName,value);
}