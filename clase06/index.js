// const primerArray = [true,5,'hola',4,'hi',false];
// // indices            0   1   2    3   4   5
// //console.log(primerArray);

// //console.log(primerArray[2]);

// //console.log(primerArray.length);

// for(let i=0;i<primerArray.length;i++){
//     console.log(primerArray[i]);
// }
// // agregar elementos a un array

// // 1. push
// primerArray.push('fin');
// primerArray.push('fin2');
// primerArray.push(true);
// // 2. unshift
// primerArray.unshift('inicio');
// primerArray.unshift(2);

// const segundoArray = [1,2,3,4,5];
// primerArray.push(segundoArray);
// console.log(primerArray);

// // eliminar elementos de un array

// // 1. pop
// primerArray.pop();
// primerArray.pop();
// primerArray.pop();
// // 2. shift
// primerArray.shift();
// primerArray.shift();
// primerArray.shift();
// console.log(primerArray);

const animales1 = ['gato','perro','serpiente','caballo','raton'];
// indices          0        1        2          3        4
//console.log(animales.length);

// .splice

//animales.splice(2,1); // borrar
//animales.pop();
//animales.splice(2,1,'vaca'); // reemplazar
//animales.splice(2,0,'vaca'); // agregar
//console.log(animales);

// .join
//const animalesString = animales.join(', ');
//console.log(animalesString)

// .concat
const animales2 = ['vaca','oso','nutria','buho','nutria'];

const animales = animales1.concat(animales2);
console.log(animales);

const animalesDom = animales.slice(0,3);
//animalesDom.push(animales[5])
animalesDom.splice(3,0,animales[5]);
//console.log(animalesDom);

// .indexOf

const index = animales.indexOf('nutria');
console.log(index);

// .includes
console.log(animales.includes('nutria'));