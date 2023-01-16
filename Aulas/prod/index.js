"use strict";
/* console.log('Olá mundo!')

function add (num1:number, num2:number){
  return num1 + num2
}

let result = add(5, 6)

console.log(result); */
var persons = [
    {
        name: 'Alef',
        age: 27,
        occupation: 'Desenvolvedor de software'
    },
    {
        name: 'Bernardo',
        age: 2,
        role: 'Administrador'
    }
];
function logPerson(person) {
    var addInfo;
    if ('role' in person) {
        addInfo = person.role;
    }
    else {
        addInfo = person.occupation;
    }
    console.log("-" + person.name + ", " + person.age + ", " + addInfo);
}
persons.forEach(logPerson);
