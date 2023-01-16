"use strict";
/* console.log('Olá mundo!')

function add (num1:number, num2:number){
  return num1 + num2
}

let result = add(5, 6)

console.log(result); */
var User = /** @class */ (function () {
    function User(name, id) {
        this.name = name;
        this.id = id;
    }
    return User;
}());
var user = new User('Dog', 1);
console.log(user.id);
user.name = 'Bernardo';
/* user.id = 5 */
console.log("User", user);
