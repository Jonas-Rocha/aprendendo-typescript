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
