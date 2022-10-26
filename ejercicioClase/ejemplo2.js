class Banco {
  constructor(nombre, id, tasa12, tasa24, tasa36) {
    this.nombre = nombre
    this.id = id
    this.tasa12 = tasa12
    this.tasa24 = tasa24
    this.tasa36 = tasa36
  }
}

const bancolombia = new Banco('bancolombia', 1, 10, 11, 12)
const itau = new Banco('itau', 2, 12, 14, 15)
const nubank = new Banco('nubank', 3, 8, 11, 14)

let bancoSeleccionado = parseInt(
  prompt(
    'Ingresa el banco que deseas cotizar? 1.Bancolombia - 2.Itau - 3.Nubank'
  )
)

// variable para condicion del while
let escogioBanco = false

// variable para informacion del bancoSeleccionado
let infoBancoSeleccionado

while (escogioBanco === false) {
  if (bancoSeleccionado === bancolombia.id) {
    escogioBanco = true
    infoBancoSeleccionado = bancolombia
  } else if (bancoSeleccionado === itau.id) {
    escogioBanco = true
    infoBancoSeleccionado = itau
  } else if (bancoSeleccionado === nubank.id) {
    escogioBanco = true
    infoBancoSeleccionado = nubank
  } else {
    bancoSeleccionado = parseInt(
      prompt(
        'Ingresa el banco que deseas cotizar? 1.Bancolombia - 2.Itau - 3.Nubank'
      )
    )
  }
}

//infoBancoSeleccionado

let montoAPrestar = parseInt(prompt('Ingresa el monto que deseas prestar'))

const cuota12 = calcularCuotaMensual(
  montoAPrestar,
  infoBancoSeleccionado.tasa12,
  12
)
const cuota24 = calcularCuotaMensual(
  montoAPrestar,
  infoBancoSeleccionado.tasa24,
  24
)
const cuota36 = calcularCuotaMensual(
  montoAPrestar,
  infoBancoSeleccionado.tasa36,
  36
)

console.log(cuota12, cuota24, cuota36)
//  10, 11, 12

// respuesta
alert(
  `Las opciones que te ofrece ${infoBancoSeleccionado.nombre} son: 1.${cuota12} a 12 meses - 1.${cuota24} a 24 meses - 1.${cuota36} a 36 meses `
)

// funcion cuota mensual
function calcularCuotaMensual(valor, interes, meses) {
  const cuota = (valor + (valor * interes) / 100) / meses

  return cuota
}

//////
//let cuota

if (cuota > 0) {
  if (cuota >= 1 && cuota <= 12) {
    tasaInteres = 10
  } else if (cuota >= 13 && cuota <= 24) {
    tasaInteres = 9
  } else if (cuota >= 25 && cuota <= 36) {
    tasaInteres = 8
  } else {
    tasaInteres = 14
  }
} else {
    cuota = 'ingresa nuevamente la cuota deseada'
}
