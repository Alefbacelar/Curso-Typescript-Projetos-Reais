/* console.log('Olá mundo!')

function add (num1:number, num2:number){
  return num1 + num2
}

let result = add(5, 6)

console.log(result); */

/* import { Class } from "@mui/icons-material"; */

//COMO FUNCIONA O TIPO ANY

/* let price = 40
let item = 'Apple'
let inStore = true

let value
value = 10
value = 'Alef' */

// AS ARRAYS / LISTAS
// Tipar array number/string
/* let values: number[]  = [
  10,20,30,40,50, */
/* ] */


//TUPLES VOCÊ PÕE OS TIPOS NUMBER STRING BOOLEAN

/* let items:[string,number,boolean]=['apple', 3, true] */

//ENUM BOM PARA ASSOCIAR DOIS ITENS

/* enum Role {
  admin = 1,
  read = 2,
  backup = 2
} */

/* const user = {
  firstName: 'Alef',
  age: 27,
  role: Role.backup 
} */

/* console.log(user) */

//FUNÇÃO VOID NÃO TEM RETORNO

/* function resultado(price: number){
  console.log('O resultado' + price)
} */

//Objetos

/* const usuario = {
  name: 'Alef Bacelar',
  idade: 27,
} */

// O UNKNOWN parecido com o any, ele pode ser qualquer coisa de uma forma temporaria.

/* let itemInput: unknown
let itemName: string

itemInput = 10
itemInput = 'agora é string' */

//NEVER NÃO PASSA NADA GERA ERRO E PARA APLICAÇÃO

/* function generateError(message: string, code:number): never{
  throw {message: message, errorCode: code}
}
generateError('A aplicação travou', 500); */

// Type ALias

/* type Users = {
  firstName: string,
  age: number,
}

const user: Users = {
  firstName: 'Alef',
  age: 27
}
console.log(user) */

// Union Type

/* function userInput(input1: number | string, input2: number | string){
  let result
  if(typeof input1 === 'number' && typeof input2 === 'number'){
    result = input1 + input2
  }
  else{
    result = input1.toString() + input2.toString()
  }
  return result
}

const combinePrices = userInput(10,20)
console.log(combinePrices)

const combineName = userInput('apple ','avocado')
console.log(combineName) */



//LITERAL TYPE

/* let productPrice: 10 | 20 | 30;

let productSize: 'S' | 'M' | 'L'

productPrice = 30

productSize = 'S' */



//INTERSECTION
//JUNTAR DOIS TYPE 

/* type User = {
  nome: string
  idade: number
}

type funcaoNaEmpresa = {
  id: number
  role: string
}

type incluir = User & funcaoNaEmpresa

const e1: incluir = {
  nome : 'Alef',
  idade: 27,
  id: 221,
  role: 'Admin'
} */


 /* ********** EXERCICIOS ********** */

 /* Exercicio 1 */

/*  let pi = 3.14159;
 let tau = pi * 2;

 console.log(`${tau} is ${pi} times two.`); */

 /* Exercicio 2 */

/*  let pie : string
 pie = 'blueberry'

 console.log(`I like to eat ${pie}-flavored pie.`) */

  /* Exercicio 3 */

/*   let isALef: boolean = true
  console.log(`${isAlef ? 'Oh, Hi Alef' : 'who are you?'}`) */

   /* Exercicio 4 */

/*    const integer: number = 6 ;
   const float: number = 6.66 ;
   const hex: number = 0xf00d ;
   const binary: number = 0b1010011010;
   const octal: number = 0o744;
   const negZero: number = -0;
   const actuallyNumber: number = NaN;
   const largestNumber: number = Number.MAX_VALUE ;
   const mostBigLyNumber: number = Infinity;
   
   const members: number[] = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBigLyNumber
   ];

   members[0] = 12345

   console.log(members) */


   /* Exercicio 5 */

 /*  const sequence: number[] = Array.from(Array(10).keys());
  const animals :string [] = ['pangolin', 'aadvark', 'echidna', 'binturong'];
  const stringsAndNumbers: (number | string)[] = [1, 'one',2, 'two', 3, 'three'];
  const allMyArrays: (number | string)[][] = [sequence, animals, stringsAndNumbers] 

  console.log(allMyArrays) */


  /* let code : number = 50
  console.log(code) */


  // CRIANDO CLASSES SESSÃO 6

 /*  class Users {
    name: string
    balance: number

    constructor(n:string, b:number){
      this.name = n 
      this.balance = b
    }

    addMoney(amount: number){
      this.balance += amount
    }
  }

  const user1 = new Users('Alef',20)
  user1.addMoney(100)

  const user2 = new Users('Bacelar',40)
  user2.addMoney(500)

  console.log(user1)
  console.log(user2) */


//  INTERFACE

/* interface Item {
  name: string
  price: number

  itemPurchased(message: string):void
}

let product1: Item

product1 = {
  name: 'apple',
  price: 2,

  itemPurchased(message: string){
    console.log(message + this.name)
  }
}

product1.itemPurchased('You just bought a ') */


//EXERCICIO 1

/* interface cartItem {
  id:number,
  title: string,
  variantId?: number
}

function AddToCart(item: cartItem){ 
  console.log(`Adding "${item.title}"to cart`);
}

AddToCart({id:1, title:'shoes'}) */

//EXERCICIO 2

/* interface Person {
  name: string,
  age:number
}

class Person implements Person{
  constructor(public name:string, public age:number){}
}

const jane = new Person('Jane', 31);
console.log(`${jane.name} is ${jane.age} years old`); */

//EXERCICIO 3

/* class MC {
  greet(event: string = 'party'):string{
    return `Welcome to the ${event}`
  }
}

const mc = new MC();
console.log(mc.greet('Show')) */


//EXERCICIO 4

/* class Employee { 
  constructor(public title:string,public salary:number){ }
}

const employee = new Employee('Engineer', 1000000);
console.log(`The new emplyee's title is ${employee.title} and they earb $ ${employee.salary}.`) */


//EXERCICIO 5


/* interface UserSchema {
  id: number
  name: string
}

class User implements UserSchema {
  constructor(public name: string, readonly id:number){}
}

const user = new User('Dog', 1)
console.log(user.id)

user.name = 'Bernardo'

console.log(`User`, user) */


//READONLY

/* class Movies {
  constructor(
    public id:number,
    public name:string,
    private _price:number){
  }
}

let movie1 = new Movies(1, '300',20)
console.log(movie1) */

/* class HotelRooms {
  [roonNumber:string]:string
}

let room = new HotelRooms()

room.A201 = 'Alef'
room.A202 = 'Bernardo'
room.A203 = 'Mariana'

console.log(room)


class Person{
  constructor(public firstName:string, public lastName:string, public age:number){}

  get greet(){
    return this.firstName + ' ' + this.lastName
  }
} */

//Cliente do Banco

/* class Clients extends Person {
   balance(){
    console.log('Your Balance is $100')
  } 
  get greet(){
    return 'Dear' + this.firstName + ' ' + this.lastName
  }
} */

//Funcionario do banco

/* class Staff extends Person{
  override get greet(){
    return 'Hi' + this.firstName + ' ' + this.lastName
  }
}

let client1 = new Clients('Alef', 'Bacelar', 27);
let staff = new Staff('Bernardo', 'Bacelar', 2);

console.log(client1.greet)
console.log(staff.greet) */



//EXERCICIO 1

/* interface User {
  name: string
  age:number
  occupation: string
}

interface Admin {
  name:string
  age: number 
  role: string
}

type Person = User | Admin

const persons: Person[] =[
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
]

function logPerson(person: Person){
  let addInfo: string
  if('role' in person){
    addInfo = person.role
  } else {
    addInfo = person.occupation
  }

  console.log(`-${person.name}, ${person.age}, ${addInfo}`)
}

persons.forEach(logPerson) */


//EXERCICIO 2

/* class Animal {
  constructor(public name:string){}
  move(meters: number){
    console.log(`${this.name} moved ${meters}m.`)
  }
}

class Snake extends Animal{
  move(meters:number = 5) {
    console.log('Slithering')
    super.move(meters)
  }
} */


//EXERCICIO 3

/* class furniture {
  constructor(protected manuFacturer:string = 'Ikea'){}
}

class Desk extends furniture{
  kind(){
    console.log(`This is a desk made by ${this.manuFacturer}`)
  }
}

const desk = new Desk()
desk.kind() */
//desk.manuFacturer


/* let multiply: (val1: number, val2: number)=> number;
let capitalize: (val:string)=> string

capitalize = function(value:string): string {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
}

multiply = function(x:number, y:number): number {
  return x * y;
}

console.log(capitalize(`nifty ${multiply(5,10)}`)); */



//EXERCICIO 5

function layEggs(quantity: number, color: string): void{
  console.log(`You just laid ${quantity} ${color} eggs. Good job!`)
}

layEggs(10, 'Blue');