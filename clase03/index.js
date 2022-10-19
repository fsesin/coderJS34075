// console.log('inicio ciclo')
// for(let i = 2;i<10;i++ ){ // for(let i=1;i=0;i++)
//   console.log(`vuelta ${i}`);
// }
// console.log('fin ciclo')
// i++ => i = i+1

// let numeroFinal = parseInt(prompt('ingresa un numero')) // '2' => 2
// for(let i=1;i<=numeroFinal;i++){
//     if(i===4){
//         console.log('El ciclo se va a interrumpir')
//         //break
//         continue
//     }
//     console.log(i)
// }

// let numero1 = parseInt(prompt('ingresa un  primer numero'))
// let numero2 = parseInt(prompt('ingresa un segundo numero'))

// if (numero1 < numero2) {
//   for (let i = numero1; i <= numero2; i++) {
//     console.log(i)
//   }
// } else if (numero1 > numero2) {
//   for (let i = numero1; i >= numero2; i--) {
//     console.log(i)
//   }
// } else {
//     alert('Los numeros ingresados son iguales')
// }

//while

// let nombre = prompt('Ingresa un nombre') // primer cliente

// while(nombre.toUpperCase()!=='JUAN'){
//     /*
// compra de otro producto
//     */
//     // if(nombre.toUpperCase()==='JOSE'){
//     //     break
//     // }

//     alert(`Bienvenido ${nombre}`)
//     nombre = prompt('Ingresa un nombre') // segundo - tercer -cuarto..... juan
// }
// alert('El total de su compra es tanto')

// let nombre = prompt('Ingresa un nombre') // primer cliente

// while(nombre.toUpperCase()!=='JUAN'){
//     alert(`Bienvenido ${nombre}`)
//     nombre = prompt('Ingresa un nombre') // segundo - tercer -cuarto..... juan
// }
// alert('juan TU NO ERES BIENVENIDO')

// let nombre = prompt('Ingresa un nombre') // primer cliente

// do{
//     alert(`Bienvenido ${nombre}`)
//     nombre = prompt('Ingresa un nombre') // segundo - tercer -cuarto..... juan
// } while(nombre.toUpperCase()!=='JUAN')

let color = prompt('Ingresa un color')
// azul | rojo | verde | naranja | otro color

if (color === 'azul') {
  alert('el color es azul')
} else if (color === 'rojo') {
  alert('el color es rojo')
} else if (color === 'verde') {
  alert('el color es verde')
} else if (color === 'naranja') {
  alert('el color es naranja')
} else {
  alert('el color es otro')
}

switch (color) {
  case 'azul':
    alert('el color es azul')
    break
  case 'rojo':
    alert('el color es rojo')
    break
  case 'verde':
    alert('el color es verde')
    break
  case 'naranja':
    alert('el color es naranja')
    break
  default:
    alert('el color es otro')
    break
}

// calculadora
let numero1 = parseInt(prompt('ingresa un  primer numero'))
let numero2 = parseInt(prompt('ingresa un segundo numero'))
let operacion = prompt('que operacion deseas hacer')
let resultado = 0
switch (operacion) {
    case 'suma':
      resultado = numero1+numero2
      break
    case 'resta':
        resultado = numero1-numero2
      break
    case 'mult':
        resultado = numero1*numero2
      break
    case 'div':
        resultado = numero1/numero2
      break
    default:
      alert('el color es otro')
      break
  }

  alert(`El resultado es ${resultado}`)