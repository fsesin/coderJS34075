const primerBoton = document.getElementById('primerBoton')
const segundoBoton = document.getElementById('segundoBoton')
//console.log(primerBoton)

// escuchar eventos

// 1. addEventListener

//primerBoton.addEventListener('click', clickFunction)

function clickFunction() {
  console.log('CLICK')
}

// 2. prefijo on

//segundoBoton.onclick = clickFunction
//segundoBoton.onclick = (e) => console.log('CLICK DIRECTO')

// distintos tipos de eventos

//MOUSE

const divMouse = document.getElementById('divMouse')
//divMouse.onmousemove = () => console.log('MOUSE MOVE')
//divMouse.onmouseover = () => console.log('MOUSE OVER')
//divMouse.onmouseout = (e) => console.log(e)
divMouse.onmousedown = () => console.log('MOUSE DOWN')
divMouse.onmouseup = () => console.log('MOUSE UP')

// TECLADO

const inputNombre = document.getElementById('nombre')
const inputApellido = document.getElementById('apellido')
const usuario = {}
//inputNombre.onkeydown = (e) => console.log(e.key)

// oninput - onchange
//inputNombre.oninput = (e) => console.log(e.target.value)
inputNombre.onchange = (e) => {
  //console.log(e.target.value)
  usuario.nombre = e.target.value
  //console.log(usuario)
}
inputApellido.onchange = (e) => {
  usuario.apellido = e.target.value
}
primerBoton.onclick = () => {
  const tituloSaludo = document.createElement('h2')
  tituloSaludo.innerText = `Bienvenido ${usuario.nombre} ${usuario.apellido}, como estas?`
  document.body.append(tituloSaludo)
}
