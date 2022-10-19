// function sumar() {
//   const num1 = parseInt(prompt('Ingrese un primer numero'))
//   const num2 = parseInt(prompt('Ingrese un segundo numero'))
//   const resultado = num1 + num2
//   alert(`El resultado de tu suma es ${resultado}`)
//   //alert('El resultado de tu suma es '+resultado)
// }

// sumar()
// sumar()
// sumar()
// calculacion(10,2,'mult')
//resta(num1,num2)
//resta(8,3)
//resta(10,6)

// const num1 = parseInt(prompt('Ingrese un primer numero')) // 10
// const num2 = parseInt(prompt('Ingrese un segundo numero'))// 2
// const operacion = prompt('Que operacion quieres realizar? sum-rest-mult-div') //mult

// calculadora(num1,num2,operacion)
// crear funciones

// function resta(n1, n2) {
//   const resultado = n1 - n2
//   //alert(`El resultado de tu resta es ${resultado}`)
//   return resultado
// }
//funcion anonima
// const resta = function(n1,n2){
//     const resultado = n1-n2
//     return resultado
// }
// resta(10,4)
// // funcion flecha
// const resta = (n1,n2)=>{
//     const resultado = n1-n2
//     return resultado
// }

// function suma(n1, n2) {
//   const resultado = n1 + n2
//   //alert(`El resultado de tu suma es ${resultado}`)
//   return resultado
// }
// function mult(n1, n2) {
//   const resultado = n1 * n2
//   //alert(`El resultado de tu mult es ${resultado}`)
//   return resultado
// }
// function div(n1, n2) {
//   const resultado = n1 / n2
//   //alert(`El resultado de tu div es ${resultado}`)
//   return resultado
// }

// function calculadora(n1, n2, oper) {
//   if (oper === 'sum') {
//     suma(10, 2)
//   } else if (oper === 'rest') {
//     resta(10, 2)
//   } else if (oper === 'mult') {
//     mult(10, 2)
//   } else {
//     div(10, 2)
//   }
// }

// const resultadoResta = resta(10,5) // => 6
// //alert(`El resultado de tu operacion es ${resultadoResta}`)
// //console.log(resultadoResta)
// if(resultadoResta === 6){
//     alert(`El resultado es el esperado`)
// } else {
//     alert(`El resultado es incorrecto`)
// }



// scope global

let primeraVariable = 5



let segundaVariable = 10
if(primeraVariable ===5){
    //primer scope locales
    segundaVariable = 15
    let terceraVariable = 20
    console.log(terceraVariable)
}
// for(){
// //segundo scope locales
// }
// while(){
// //tercer scope locales
// }
// let terceraVariable = 10
console.log(segundaVariable)
console.log(terceraVariable)




