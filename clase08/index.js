//console.log(document.body)


// getElement
// 1. getElementById
const parrafo1 = document.getElementById('parrafo1')
//console.log(parrafo1)
// 2. getElementsByClassName
//const todos = document.getElementsByClassName('clase1')
//console.log(todos)
// 3. getElementsByTagName
//const todosTag = document.getElementsByTagName('h1')
//console.log(todosTag)

// // querySelector
// const parrafoQuery = document.querySelector('#parrafo1')
// //console.log(parrafoQuery)
const h1Class = document.querySelector('.clase2')
// //console.log(h1Class)
// const tagQuery = document.querySelector('p')
// console.log(tagQuery)

// //querySelectorAll
// const parrafoQuery = document.querySelectorAll('#parrafo1')
// //console.log(parrafoQuery)
// const h1Class = document.querySelectorAll('.clase2')
// //console.log(h1Class)
// const tagQuery = document.querySelectorAll('p')
// console.log(tagQuery)

//innerText
parrafo1.innerText = 'DOM MANIPULADO DESDE JS'
h1Class.innerText = 'TITULO MANIPULADO DESDE JS'

//innerHTML
const divPrimero = document.getElementById('primerDiv')
divPrimero.innerHTML = '<button>INGRESA AQUI</button><p>PARRAFO DIV</p>'

// ELIMINAR
//parrafo1.remove()

//AGREGAR
// 1. crear el elemento
const parrafoNuevo = document.createElement('p')
parrafoNuevo.innerText = 'PARRAFO CREADO DESDE JS'
parrafoNuevo.setAttribute('id','parrafoJS')
parrafoNuevo.setAttribute('name','pJS')
// 2. donde lo voy a agregar
divPrimero.append(parrafoNuevo)

// clasde a parrafo1
const claseAnt = parrafo1.getAttribute('class')
parrafo1.setAttribute('class',`${claseAnt} nuevaClass`)

