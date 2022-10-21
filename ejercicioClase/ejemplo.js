let producto = parseInt(
  prompt(
    'Escoge el producto que deseas comprar: 1.iPhone - 2.TV - 3.Ipad - 4.Computador'
  )
)
let seguirComprando = true
let totalCompra = 0
let decision

// clase producto
class NewProduct{
  constructor(id,name,price,stock){
    this.id = id
    this.name = name;
    this.price = price;
    this.stock = stock
  }
}
const iphone = new NewProduct(1,'iPhone',600,20);
const tv = new NewProduct(2,'TV',1000,40);
const ipad = new NewProduct(3,'iPad',200,30);
const computador = new NewProduct(4,'computador',800,15);
iphone.price = 650


while (seguirComprando === true) {
  if (producto === iphone.id) {
    totalCompra = totalCompra + iphone.price
    iphone.stock = iphone.stock-1
  } else if (producto === tv.id) {
    totalCompra = totalCompra + tv.price
  } else if (producto === ipad.id) {
    totalCompra = totalCompra + ipad.price
  } else if (producto === computador.id) {
    totalCompra = totalCompra + computador.price
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
