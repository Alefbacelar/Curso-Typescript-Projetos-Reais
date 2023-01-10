console.log('Olá mundo!')

function add (num1:number, num2:number){
  return num1 + num2
}

let result = add(5, 6)

console.log(result);

//COMO FUNCIONA O TIPO ANY

let price = 40
let item = 'Apple'
let inStore = true

let value
value = 10
value = 'Alef'

// AS ARRAYS / LISTAS
// Tipar array number/string
let values: number[]  = [
  10,20,30,40,50,
]


//TUPLES VOCÊ PÕE OS TIPOS NUMBER STRING BOOLEAN

let items:[string,number,boolean]=['apple', 3, true]

//ENUM BOM PARA ASSOCIAR DOIS ITENS

enum Role {
  admin = 1,
  read = 2,
  backup = 2
}

const user = {
  firstName: 'Alef',
  age: 27,
  role: Role.backup 
}

console.log(user)

//FUNÇÃO VOID NÃO TEM RETORNO

function resultado(price: number){
  console.log('O resultado' + price)
}

//Objetos

const usuario = {
  name: 'Alef Bacelar',
  idade: 27,
}

// O UNKNOWN parecido com o any, ele pode ser qualquer coisa de uma forma temporaria.

let itemInput: unknown
let itemName: string

itemInput = 10
itemInput = 'agora é string'

//NEVER NÃO PASSA NADA GERA ERRO E PARA APLICAÇÃO

function generateError(message: string, code:number): never{
  throw {message: message, errorCode: code}
}
generateError('A aplicação travou', 500)