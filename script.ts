//TIPOS PRIMITIVOS TYPESCRIPT


//String para texto
let username : string //neste caso "username" só poderá receber valor como string.

username = "jonas"
//username = 27
//username = true

//Number para número
let total: number
total = 3
total = 7.5

//Boolean para verdadeiro ou falso.
let isLoading : boolean
isLoading = true
isLoading = false


//TIPAGEM EXPLICITA
let myName: string
myName = "Jonas Rocha"


//INFERÊNCIA DE TIPOS
let message = "oi, tudo bem?" // Aqui o typescript ja assume que a variável é do tipo "string" então não podemos passar valores como number ou boolean apos isso.
//message = 67 // << isso da erro.
message = "sim, tudo ótimo!"



let message1 : any
//Com o tipo any a variável aceita qualquer valor.
message1 = "Esse é um texto..."
message1 = 45
message1 = true


// Tipagem explicita ou Anotação de tipo (Type Annotation)
let names : string[] = ["Jonas", "Andressa", /*8 <<colocando um número da erro*/]
let numbers : number[] = [1, 2, 3, 4, 5, /*"Jõao" << colocando uma string da erro*/]



// Inferência de tipo.
let products = ["Product x", "Product y", "Product z"] //ele já deduz que é um array de strings[]



 function sum(x: number, y: number) { // eu posso tipar o retorno da função como "void" também. assim eu não conseguiria retornar nem string nem numero nem boolean também. o mesmo serve se eu passar o retorno como numero, por exemplo.. ele imperidia o retorno de uma string
  const result = x + y
  console.log("Resultado = " + result)

  //return result
  return "7"  // isso quebraria toda a lógica pois o retorno fica tipado como string e se for usar esse retorno depois como numero não vai funcionar.
 }

 const result = sum(7, 8) // a função e o proprio result aqui << ficado tipo void quando não tem retorno. mas se eu passo o retorno na função eles são preenchidos com a tipagem.

//Funcionaria com arrowFunctions também.
 const showMessage = (name: string):string => {
  const message = "Olá" + name

  return message
 }

 showMessage("Jonas Rocha", 65)




 // Tipagem em objetos

 // A partir do momento que eu declaro uma propriedade dentro de um objeto ele passa a ser obrigatorio ser preenchido.
 // Consigo deixar uma propriedade opcional quando eu coloco uma interrogação "?".
 let user: {name:string, age:number, urlAvatar?:string} = {

  name: "Jonas",
  age: 27,
 }


//  function singIn(email:string, password:string) {
//   // Lógica de conectar o usuário na aplicação.
//  }

//  singIn("jonas@email.com", "123")

function singIn(/*data :*/ {email, password} : {email:string, password:string}) {
  // Lógica de conectar o usuário 
}

singIn({email: "jonas@email.com", password: "123"})





//Null e Undefined

//Undefined
let value:number
console.log(value)

//Null
let email = null
console.log(email)

if(!email){
  console.log("Informe o email!")
}



