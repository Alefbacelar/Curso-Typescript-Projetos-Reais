"use strict";
/* console.log('Olá mundo!')

function add (num1:number, num2:number){
  return num1 + num2
}

let result = add(5, 6)

console.log(result); */
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
var code = 20;
console.log(code);
