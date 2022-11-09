// guardar informacion en storage

localStorage.setItem('nombre','Jorge')
localStorage.setItem('apellido','Hilario')
// sessionStorage.setItem('correo','jorge@mail.com')

// trae informacion del storage
const apellidoUsuario = localStorage.getItem('apellido')
const correoUsuario = sessionStorage.getItem('correo')

//console.log(apellidoUsuario)
//console.log(correoUsuario)

// borrar por key

//localStorage.removeItem('nombre')
sessionStorage.removeItem('correo')

// borrar todo el storage

//localStorage.clear()
sessionStorage.clear()

// .length
//console.log(localStorage.length)
//console.log(sessionStorage.length)

// .key
//console.log(localStorage.key(0))
//console.log(localStorage.key(1))

// for(let i=0;i<localStorage.length;i++){
//     const keyName = localStorage.key(i)
//     const keyValue = localStorage.getItem(keyName)
//     console.log(keyName,keyValue)
// }

localStorage.setItem('edad',25)

const edadUsuario = localStorage.getItem('edad') // '25'
if(edadUsuario === 25){
    console.log('si es')
} else {
    console.log('no es')
}

const objUsuario = {
    nombre: 'Valentino',
    apellido: 'Suarez',
    edad: 30,
    estaCasado: true
}

localStorage.setItem('objetoUsuario',objUsuario)
const objStorage = localStorage.getItem('objetoUsuario')
console.log(objStorage)

// JSON

const objUsuarioJSON = JSON.stringify(objUsuario)
localStorage.setItem('objUsuarioJSON',objUsuarioJSON)
const objStorageJSON = localStorage.getItem('objUsuarioJSON')
