// function sumar(a, b) {
//   return a + b
// }

// function restar(a, b) {
//   return a - b
// }

// function mult(a, b) {
//   return a * b
// }

// // console.log(sumar(5,4)) // 10 segundos
// // console.log(restar(5,4))
// // console.log(mult(5,4))

// // setTimeOut

// // console.log('Primer console.log')
// // setTimeout(() => {
// //     console.log('Segundo console.log')
// // }, 0);
// // console.log('Tercer console.log')
// // console.log('Cuarto console.log')

// // setInterval
// const interval = setInterval(() => {
//   console.log('Segundo console.log')
// }, 2000)

// clearInterval(interval)

// let resultadoSuma
// // funcion asincronica
// setTimeout(() => {
//   resultadoSuma = sumar(5, 4) // 9
// }, 5000)

// //esto depende de l funcion asincronica, esperemos
// const resultadoResta = restar(resultadoSuma, 5)
// console.log(resultadoResta)

// //esto lo voy ejecutando
// console.log('ejecutando otras funciones')

// promises

function primeraPromesa(palabra) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (palabra === 'hola') {
        resolve(10)
      } else {
        reject('no eres bienvenido')
      }
    }, 1000)
  })
}
// NaN => Not A Number
function segundaPromesa(num){
    return new Promise((resolve,reject)=>
    setTimeout(() => {
        if(!isNaN(num)){
            resolve(num*2)
        } else {
            reject('no es un numero')
        }
    }, 1000))
}
// const respuesta = primeraPromesa('hola')
// console.log(respuesta)

primeraPromesa('hola')
.then(response=>{
    console.log(response)
    return segundaPromesa(response)
})
.then(response=> console.log(response))
.catch(e=>console.log(e))
