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


//Union Types
//Unindo possibilidades de tipos para uma variável.
let response: string | null | number

response = "Teste"
response = null
response = 22
 



//Criando tipos personalizados

//Conhecendo interface no TypeScript

interface Product {
  id: number,
  name: string
}

function newProduct(product: Product) {
}

newProduct({id: 1, name: "Produto X"})



// Como estender interfaces 

interface Person {
    id: number,
    name: string,
    //email: string,
}

interface Teacher extends Person {
  //id: number,
  //name: string,
  subjects: string[]
}

interface Student extends Person {
  // id: number,
  // name: string,
  age: number
}

let teacher: Teacher = { id: 1, name: "Jonas", subjects: ["JavaScript", "TypeScript"]}

let student: Student = { id: 2, name: "Jõao", age: 23}




//Usando Type

type Product1 = {
  id: number,
  name: string
}

function newProduct1(product: Product1) {

}

newProduct1({id: 1, name: "Produto x"})


type SelectResponse = Product1[] | null

function selectProducts1(): SelectResponse {
  return null
}





//Intersecção de tipos (EXTENDENDO TIPOS)

type Person1 = {
  id: number,
  name: string
}

type Teacher1 = Person1 & {
  subjects: string[]
}

type Student1 = Person1 & {
  age: number
}

let teacher1: Teacher1
teacher1.id
let student1: Student1
student1.id


//Generic

/*
* S => state
* T => type
* K => key
* V => value
* E => element
*/

function useState<T extends number | string = string>() {
  let state: T;

  function get() {
    return state;
  }

  function set(newValue: T) {
    state = newValue;
  }

  return {get, set}
}


let newState = useState<string>();
newState.get();
newState.set("jonas");
newState.set(123);


/*
Nessa aula, aprenderemos a utilizar generics no TypeScript para tornar a tipagem mais flexível. 
Os generics permitem definir o tipo em tempo de execução, diferentemente do union, que oferece opções flexíveis, mas não exige a mesma tipagem. 
É possível definir um tipo padrão para o generic, caso não seja especificado. A utilização de generics é comum em diversas bibliotecas e tecnologias, como React e Axios, facilitando a flexibilidade e consistência na tipagem.
*/



/*
Utilitários do TypeScript
O TypeScript oferece diversos utilitários que facilitam o trabalho com tipagem, como manipulação, transformação e reutilização de tipos. Esses recursos aumentam a produtividade ao lidar com tipagem no TypeScript. 
Vamos explorar esses utilitários para melhorar nossa eficiência no desenvolvimento.
*/



//Partial

interface User {
  id: number,
  name: string,
  email: string
}

const newUser: User = { id: 1, name: "Jonas" email: "jonas@email.com" }


// diferente da interrogação "?" que deixa uma proriedade opicional, o Partial deixa todos opcionais.
const updatedUser: Partial<User> = { name: "João" }




interface Book {
  title: string,
  pages: number,
  author: string,
  description: string
}

interface BookPreview {
  title: string
}

const book1: BookPreview = { title: "Typescript"}
// Utiliznado o pick eu não precisaria criar uma nova tipagem para criar um novo "Book"
const book2: Pick<Book, "title" | "pages"> = { title: "Typescript", pages: 150}



// Omit

// O Omit é para quando eu quero reaproveitar alguma tipagem mas deixar de fora algumas propriedades.
const book3: Omit<Book, "description" | "pages"> = { title: "Typescript", author: "Jonas" }






// Record

/*
Nesta aula, você vai aprender a utilizar o utilitário Record para mapear tipos de objetos. 
Pode-se definir chaves como String e valores como números, limitando as opções disponíveis. 
É possível criar objetos com chaves String e valores numéricos, ou até mesmo com tipos personalizados. 
O Record ajuda a restringir as chaves e valores dentro de um objeto, garantindo a conformidade com a tipagem definida. 
Essa ferramenta é útil para definir a estrutura que um objeto deve seguir.
*/

//Cria um objeto onde todas as chaves são string e os valores são numeros.
const scores: Record<string, number> = {
  "Jonas": 10,
  "João": 15,
}


// Limitar valores.
type Profile = "admin" | "user" | "guest"

const userNovo: Record<Profile, number> = {
  "admin": 1,
  "guest": 2,
  "user": 3
  //"default": 4  não existe dentro da tipagem "Profile"
}


// Objetos personalizados.
interface UserNovo {
  name: string,
  email: string
}


const users: Record<number, UserNovo> = {
  1: { name: "Jonas", email: "jonas@email.com"},
  2: { name: "João", email: "joao@email.com"}
}






// Typeof

/*
Nessa aula, aprenderemos a utilizar o typeof para definir tipagens a partir de outras. 
O typeof permite extrair a tipagem de um objeto já definido e aplicá-la em outro, facilitando a reutilização de tipagens, especialmente ao lidar com bibliotecas externas ou APIs. 
Essa técnica é útil para definir tipagens a partir de conteúdos já existentes
*/


interface ProductNovo {
  id: number,
  name: string
}

const productA: ProductNovo = { id: 1, name: "Produto A" }

const productB: typeof productA = { id: 2, name: "Produto B"}



// Keyof 


/*
Nesta aula, aprendemos a utilizar o KeyOff para extrair chaves de um objeto e usá-las para tipagem. 
Criaremos um objeto icons com chaves de nomes de ícones e valores de endereços. 
Em seguida, criaremos uma tipagem a partir desse objeto usando KeyOff, o que nos permite restringir o uso apenas às chaves disponíveis. 
Assim, conseguiremos extrair as chaves de uma tipagem usando o KeyOff.
*/



const icons = {
  "home": "./path/home.svg",
  "add": "./path/add.svg",
  "remove": "./path/remove.svg"
}


type Icon = typeof icons

//O keyof é só para extrair a chave de um objeto, é muito utilizado para consumir biblioteca de icones, por exemplo.
const icon: keyof Icon = "add"

