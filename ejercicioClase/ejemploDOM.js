const productosArray = []
// clase producto
class NewProduct {
  constructor(id, name, price, stock) {
    this.id = id
    this.name = name
    this.price = price
    this.stock = stock
  }
}
const iphone = new NewProduct(1, 'iPhone', 600, 20)
productosArray.push(iphone)
const tv = new NewProduct(2, 'TV', 1000, 40)
productosArray.push(tv)
const ipad = new NewProduct(3, 'iPad', 200, 30)
productosArray.push(ipad)
const computador = new NewProduct(4, 'computador', 800, 15)
productosArray.push(computador)

// manipular DOM

const selectProd = document.getElementById('lista')
//console.log(productosArray)
productosArray.forEach((elemento) => {
  const optionProd = document.createElement('option')
  optionProd.innerText = `${elemento.name}: $${elemento.price}`
  optionProd.setAttribute('id', `${elemento.id}`)
  selectProd.append(optionProd)
})
// carrito
const carrito = []

const botonIngresar = document.getElementById('ingresarProd')
const finalizarCompra = document.getElementById('finalizar')

botonIngresar.onclick = () => {
  console.log(selectProd.selectedIndex)
  const indexProd = selectProd.selectedIndex
  const productoSeleccionado = productosArray[indexProd]
  console.log(productoSeleccionado)
  carrito.push(productoSeleccionado)
}

finalizarCompra.onclick = () => {
  console.log(carrito)
  let total = 0
  carrito.forEach((prod) => {
    total = total + prod.price
  })
  alert(
    `Escogiste ${carrito.length} productos y el total de la compra es de ${total}`
  )
}
