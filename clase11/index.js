// buscar elementos en el DOM

const inputNombre = document.getElementById('nombre')
const inputApellido = document.getElementById('apellido')
const botonIngresar = document.getElementById('ingresar')
const divInicial = document.getElementById('divInicial')
const divSaludar = document.getElementById('divSaludar')
const divInv = document.getElementById('divInv')
const divResultado = document.getElementById('divResultado')

// arreglo de riesgos
const riesgos = [
  {
    tipo: 'bajo',
    tasa: 0.5,
  },
  {
    tipo: 'medio',
    tasa: 0.8,
  },
  {
    tipo: 'alto',
    tasa: 1.5,
  },
]

// clase Banco
class Banco {
  constructor(nombre) {
    this.nombre = nombre
    this.rendimiento = Math.ceil(Math.random() * 20)
  }
}

const bancos = []
bancos.push(new Banco('NuBank'))
bancos.push(new Banco('Itau'))
bancos.push(new Banco('Bancolombia'))
bancos.push(new Banco('ScotiaBank'))

// escuchar eventos
//botonIngresar.addEventListener('click',)
botonIngresar.onclick = () => {
  if (inputNombre.value || inputApellido.value) {
    const usuario = {
      nombre: inputNombre.value,
      apellido: inputApellido.value,
    }
    localStorage.setItem('infoUsuario', JSON.stringify(usuario))

    // eliminando un div del DOM
    divInicial.remove()

    // agregando un elemento h2 al DOM
    const saludarTitulo = document.createElement('h2')
    saludarTitulo.innerText = `Bienvenido ${usuario.nombre} ${usuario.apellido}, estas listo para invertir?`
    divSaludar.append(saludarTitulo)

    // agregar mas elementos al DOM - inv
    crearInversionDiv()

    const botonCalcular = document.getElementById('botonCalcular')
    botonCalcular.onclick = () => {
      // coger informacion del input monto y el select riesgo
      const montoAInvertir = document.getElementById('inputMonto').value
      const riesgoEscogido = document.getElementById('selectRiesgo').value
      console.log(montoAInvertir, riesgoEscogido)
      const tasaRiesgoEscogido = riesgos.find(
        (riesgo) => riesgo.tipo === riesgoEscogido
      ).tasa
      console.log(tasaRiesgoEscogido)

      bancos.forEach((banco) => {
        const rendimientoConRiesgo = banco.rendimiento * tasaRiesgoEscogido
        const utilidad = montoAInvertir * rendimientoConRiesgo
        const parrafoBanco = document.createElement('p')
        parrafoBanco.innerText = `El banco ${banco.nombre} te ofrece un rendimiento anual de ${rendimientoConRiesgo}% lo que te generaria unas utilidades de ${utilidad} `
        divResultado.append(parrafoBanco)
      })
    }
  }
}

// funcion para crear elementos en el div inversion
function crearInversionDiv() {
  // crear elemento input monto a invertir
  const inputMonto = document.createElement('input')
  inputMonto.setAttribute('type', 'number')
  inputMonto.setAttribute('id', 'inputMonto')

  // crear elemento parrafo
  const parrafo = document.createElement('p')
  parrafo.innerText =
    'Coloca el monto a invertir y el tipo de riesgo que quieres asumir'

  // creat select con riesgos
  const select = document.createElement('select')
  select.setAttribute('id', 'selectRiesgo')
  // crear opciones de riesgos de forma dinamica
  riesgos.forEach((riesgo) => {
    const optionRiesgo = document.createElement('option')
    optionRiesgo.innerText = `${riesgo.tipo}`
    select.append(optionRiesgo)
  })
  // boton para calcular inversion
  const botonCalcular = document.createElement('button')
  botonCalcular.setAttribute('id', 'botonCalcular')
  botonCalcular.innerText = 'CALCULAR'

  divInv.append(parrafo, inputMonto, select, botonCalcular)
}
