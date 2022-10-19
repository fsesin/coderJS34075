let producto = parseInt(
  prompt(
    'Escoge el producto que deseas comprar: 1.iPhone - 2.TV - 3.Ipad - 4.Computador'
  )
)
let seguirComprando = true
let totalCompra = 0
let decision
while (seguirComprando === true) {
  if (producto === 1) {
    totalCompra = totalCompra + 600
  } else if (producto === 2) {
    totalCompra = totalCompra + 1000
  } else if (producto === 3) {
    totalCompra = totalCompra + 200
  } else if (producto === 4) {
    totalCompra = totalCompra + 800
  }

  decision = parseInt(prompt('Quieres seguir comprando? 1.Si - 2.No'))
  if (decision === 1) {
    producto = parseInt(
      prompt(
        'Escoge el producto que deseas comprar: 1.iPhone - 2.TV - 3.Ipad - 4.Computador'
      )
    )
  } else {
    seguirComprando = false
  }
}

const totalCompraConDescuento = descuento(totalCompra)
alert(`El total de tu compra es ${totalCompraConDescuento}`)

//1.iPhone(600) - 2.TV(1000) - 3.Ipad(200) - 4.Computador(800)'

function descuento(valor) {
  let descuento = 0
  if (valor <= 1000) {
    descuento = 10
  } else if (valor > 1000 && valor <= 2000) {
    descuento = 15
  } else {
    descuento = 20
  }

  let valorDescuento = valor * (descuento / 100)
  let valorFinal = valor - valorDescuento
  return valorFinal
}
