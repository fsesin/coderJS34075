// // animal

// // const tipoAnimal1 = 'perro';
// const nombreAnimal1 = 'Firulais'
// const edadAnimal1 = 4

// // // iPhone
// // const precioIphone = 800;
// // const nombreIphone = 'Iphone';
// // const stockIphone = 20;

// let animal1 = {
//   tipo: 'perro',
//   nombre: 'Firulais',
//   edad: 4,
//   dueno: 'Jorge',
//   color: 'Negro',
//   esAdoptado: true,
// }

// console.log(animal1.nombre, animal1.dueno)
// console.log(animal1['nombre'], animal1['dueno'])

// console.log(
//   `Este animal es un ${animal1.tipo} que se llama ${animal1.nombre} y tiene ${animal1['edad']} de edad`
// )

// // modificar - agregar

// animal1.edad = 5
// animal1.raza = 'french'
// animal1['peso'] = 10
// console.log(animal1)

// constructores

// let producto1 = {
//   nombre: 'Iphone',
//   precio: 800,
//   stock: 20,
// }

// let producto2 = {
//   nombre: 'TV',
//   precio: 1000,
//   stock: 15,
// }

// let producto3 = {
//   nombre: 'Ipad',
//   precio: 200,
//   stock: 40,
// }

// let producto4 = {
//   nombre: 'Computador',
//   precio: 900,
//   stock: 10,
// }

// function Animal(tipo,nombre,edad){
//     this.tipo = tipo;
//     this.nombre = nombre;
//     this.edad = edad;
// }

// const animal1 = new Animal('perro','firulais',4)
// console.log(animal1)
// const animal2 = new Animal('gato','mishu',6)
// animal2.esAdoptado = true
// console.log(animal2)

// EJERCICIO

// function NuevoUsuario(nombre,email,password){
//     this.nombre = nombre;
//     this.email = email;
//     this.password = password;
//     this.tieneEmail = function(){
//         if(this.email){
//             return true;
//         } else {
//             return false;
//         }
//     };
//     this.saludar = function(){
//         return (`Hola mi nombre es ${this.nombre}`)
//     }
// }

// const usuario1 = new NuevoUsuario('Farid','farid@gmail.com','12345');
// const usuario2 = new NuevoUsuario('Eric',null,'123456');
// const usuario3 = new NuevoUsuario('Jose','jose@gmail.com','abcde');
// // console.log(usuario1.nombre)
// // console.log(usuario1.tieneEmail())
// // console.log(usuario2.tieneEmail())
// // console.log(usuario2.saludar())
// // console.log(usuario1.saludar())
// // console.log(usuario3.saludar())
// console.log(usuario3)
// usuario3.telefono = 32145677878
// delete usuario2.nombre
// console.log(usuario2)

// function tieneEmail(param){
//     if(param.email){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(tieneEmail(usuario1)) //

// console.log(tieneEmail(usuario2))

// console.log(tieneEmail(usuario3))

// clases

// function NuevoUsuario(nombre,email,password){
//     this.nombre = nombre;
//     this.email = email;
//     this.password = password;
//     this.tieneEmail = function(){
//         if(this.email){
//             return true;
//         } else {
//             return false;
//         }
//     };
//     this.saludar = function(){
//         return (`Hola mi nombre es ${this.nombre}`)
//     }
// }

class NuevoUsuario {
  constructor(nombre, email, password) {
    this.nombre = nombre
    this.email = email
    this.password = password
  }
  tieneEmail() {
    if (this.email) {
      return true
    } else {
      return false
    }
  }
  saludar () {
    return `Hola mi nombre es ${this.nombre}`
  }
}
const usuario4 = new NuevoUsuario('Demian', 'demian@gmail.com', '1dgfth')
console.log(usuario4.saludar())
