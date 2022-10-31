// funciones que retornas funciones

function elevar(n) {
  return function (m) {
    return m ** n
  }
}

let cuadrado = elevar(2) // n = 2
let cubo = elevar(3) // n = 3

// console.log(cuadrado(4)) // m = 4
// console.log(cuadrado(6)) // m = 6
// console.log(cubo(4)) // m = 4
// console.log(cubo(6)) // m = 6

// funcion que tiene como parametro otra funcion

function operacionMatematica(n1, n2, fn) {
  const resultado = fn(n1, n2)
  return resultado
}

const sumar = (n1, n2) => {
  return n1 + n2
}

const restar = (n1, n2) => {
  return n1 - n2
}

// console.log(operacionMatematica(1, 2, sumar))
// console.log(operacionMatematica(12, 8, restar))

// creando la funcion directamente en los parentesis

// console.log(
//   operacionMatematica(1, 2, (n1, n2) => {
//     return n1 + n2
//   })
// )

// console.log(
//   operacionMatematica(12, 8, (n1, n2) => {
//     return n1 - n2
//   })
// )

const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < arrayNum.length; i++) {
//   console.log(arrayNum[i])
// }

// forEach

// let mostrarElementos = function(e){
//     console.log(e)
// }
let mostrarElementos = (elemento) => console.log(elemento)

//arrayNum.forEach((elemento) => console.log(elemento))

// find
const arrayPersonas = [
  {
    nombre: 'Antonio',
    edad: 18,
    curso: 'JS12',
  },
  {
    nombre: 'Ezequiel',
    edad: 24,
    curso: 'JS8',
  },
  {
    nombre: 'Ezequiel',
    edad: 28,
    curso: 'JS10',
  },
  {
    nombre: 'Demian',
    edad: 35,
    curso: 'JS10',
  },

  {
    nombre: 'Mariano',
    edad: 40,
    curso: 'JS8',
  },
]
//const elementoCorrecto = arrayPersonas.find((e) => e.nombre === 'Ezequiel')
//console.log(elementoCorrecto)

// filter

const arrayFiltrado = arrayPersonas
  .filter((persona) => persona.nombre === 'Ezequiel')
  .map((persona) => {
    return { nombre: persona.nombre, edad: persona.edad }
  })
  .sort((a, b) => a.edad - b.edad)
console.log(arrayFiltrado)

// some
// const elementoCorrecto = arrayPersonas.some((e) => e.nombre === 'Ezequiel')
// console.log(elementoCorrecto)

// map

const arrayMap = arrayPersonas.map((persona) => persona.nombre)
//console.log(arrayMap)
//console.log(arrayPersonas)

// sort

arrayPersonas.sort((a, b) => a.edad - b.edad)
console.log(arrayPersonas)


// Math

const pi = Math.PI

let numero = 43.22
console.log(Math.ceil(numero))
console.log(Math.random())
console.log(Math.sqrt(100))

// Date
const now = new Date()
console.log( now)
console.log( now.toLocaleString())