// let y const
const numero1 = 50
const numero2 = 20
//const resultado = numero1 + numero2;

// condicion => manana llueve ===> verdadero - falso
// si mananallueve entonces nos quedamos en la casa sino vamos a la playa
//    if(mananaLlueve){
//    // nos quedamos en la casa
//    }

// CONDICIONAL COMPARATIVO ===
// if (numero1 === 5) {
//   console.log('este numero tiene un valor 5 ');
// } else {
//   console.log('este numero es distinto de 5');
// }

// CONDICIONAL MAYOR QUE

// if(numero2>=20 || numero2<=30 ){
//     alert('condicion true');
// } else {
//     alert('condicion false');
// }

// let profesion = prompt("Eres medico o eres ingeniero?");
// let valorHora

// if(profesion==='medico'){
//     valorHora = 10;
// } else {
//     valorHora = 8;
// }

// alert('te podemos pagar por hora '+valorHora);

// let operacion = prompt('Que operacion deseas hacer? suma, resta, mult, div')
// let resultado

// if(operacion === 'suma'){
//     resultado = numero1+numero2
// } else if(operacion === 'resta'){
//     resultado = numero1-numero2
// } else if(operacion === 'mult'){
//     resultado = numero1*numero2
// } else {
//     resultado = numero1/numero2
// }

// //alert('El resultado de tu operacion es:'+resultado)
// alert(`El resultado de tu ${operacion} es: ${resultado}`)

let horasTrabajadas = parseInt(prompt('Cuantas horas trabajaste esta semana')) // '55'
let profesion = prompt('Eres medico o ingeniero') // medico
let horasExtras
let horasNormales = 40
let pagoSemanal
let valorHoraNormal
let valorHoraExtra

// asignando un valor a horasNormales
if (profesion === 'medico') {
  valorHoraNormal = 20
} else {
  valorHoraNormal = 25
}

// Asignando cuantas horas extras y cuanto vale la hora extra y pago Semanal
if (horasTrabajadas > 40 && horasTrabajadas <= 60) {
  horasExtras = horasTrabajadas - horasNormales
  valorHoraExtra = valorHoraNormal * 1.5
  pagoSemanal = horasNormales * valorHoraNormal + horasExtras * valorHoraExtra
} else if (horasTrabajadas > 60) {
  horasExtras = horasTrabajadas - horasNormales // 60
  valorHoraExtra = valorHoraNormal * 2.5 // 50 usd
  pagoSemanal = horasNormales * valorHoraNormal + horasExtras * valorHoraExtra // 3800
} else {
  pagoSemanal = horasTrabajadas * valorHoraNormal
}

alert(`El pago semanal que te corresponde por ${horasTrabajadas} horas trabajadas es de ${pagoSemanal}`)
