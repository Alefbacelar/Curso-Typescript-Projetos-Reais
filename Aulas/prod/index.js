"use strict";
/* console.log('Olá mundo!')

function add (num1:number, num2:number){
  return num1 + num2
}

let result = add(5, 6)

console.log(result); */
var product1;
product1 = {
    name: 'apple',
    price: 2,
    itemPurchased: function (message) {
        console.log(message + this.name);
    }
};
product1.itemPurchased('You just bought a ');
