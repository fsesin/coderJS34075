const formularioUsuario = document.getElementById('formulario')
const titulo = document.getElementById('titulo')
const nombreUsuario = document.getElementById('nombre')
const apellidoUsuario = document.getElementById('apellido')

// obj para guardar info del usuario
const infoUsuario = {}

// evento submit
formularioUsuario.onsubmit = (e) =>{
    e.preventDefault()
    infoUsuario.nombre = nombreUsuario.value
    infoUsuario.apellido = apellidoUsuario.value
    //console.log(infoUsuario)
    localStorage.setItem('infoUsuario',JSON.stringify(infoUsuario))
}

// formularioUsuario.onsubmit = (e) =>{
//     e.preventDefault()
//     localStorage.setItem('nombreUsuario',nombreUsuario.value)
//     localStorage.setItem('apellidoUsuario',apellidoUsuario.value)
// }

const infoUsuarioStorage = JSON.parse(localStorage.getItem('infoUsuario'))
console.log(infoUsuarioStorage)
if(infoUsuarioStorage.nombre !== "" || infoUsuarioStorage.apellido !== ""){
    titulo.innerText = `Hola ${infoUsuarioStorage.nombre} ${infoUsuarioStorage.apellido}, bienvenido de vuelta`
}

