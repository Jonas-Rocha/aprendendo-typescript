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