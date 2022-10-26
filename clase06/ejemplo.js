
const numerosArray = [];
let i = 0;

while(i<5){
    let numero = parseInt(prompt('Ingresa un numero'));
    numerosArray.push(numero);
    i++;
}
console.log(numerosArray);

// usuario 2
const preguntaNumero = parseInt(prompt('Ingresa el numero que quieres averiguar'));
const index = numerosArray.indexOf(preguntaNumero);
if(index !== -1){
    alert(`El numero ingresado se encuentra en la posicion ${index}`);
} else {
    alert('El numero ingresado no existe en la lista');
}
