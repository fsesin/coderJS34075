// clase producto

class Producto {
  constructor(id, nombre, precio) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
  }
}

// creamos los productos
const producto1 = new Producto(1, 'iPhone', 600)
// productosArray.push(new Producto(1, 'iPhone', 600))
// productosArray.push(producto1)
const producto2 = new Producto(2, 'iPad', 200)
const producto3 = new Producto(3, 'Airpods', 100)
const producto4 = new Producto(4, 'Macbook', 1200)
const producto5 = new Producto(5, 'AppleWatch', 250)
const producto6 = new Producto(6, 'Samsung Galaxy', 600)
const producto7 = new Producto(7, 'Nokia 1100', 500)
const producto8 = new Producto(8, 'Smart TV', 800)
const producto9 = new Producto(9, 'GoPro', 200)
const producto10 = new Producto(10, 'Digital Camera', 550)

// creando el arreglo productos
const productosArray = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8,
  producto9,
  producto10,
]

// buscar elementos al DOM

const divProductos = document.querySelector('#divProductos')

productosArray.forEach((producto) => {
  divProductos.innerHTML += `
    <div id="${producto.id}" class="card cardProducto">
    <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">$${producto.precio}</p>
    <button id="${producto.id}" class="btn btn-primary">AGREGAR</button>
    </div>
    </div>
    
    `
})

// carrito de compra

const carrito = []
const botonesAgregar = document.querySelectorAll('.btn-primary')
//console.log(botonesAgregar)

botonesAgregar.forEach((boton) => {
  boton.onclick = () => {
    const producto = productosArray.find(
      (prod) => prod.id === parseInt(boton.id)
    )

    const productoCarrito = {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1,
    }

    const indexCarrito = carrito.findIndex((prod) => prod.id === producto.id)

    if (indexCarrito === -1) {
      carrito.push(productoCarrito)
    } else {
      carrito[indexCarrito].cantidad += 1
    }
    console.log(carrito)
  }
})

// boton finalizar compra

const botonFinalizar = document.querySelector('#finalizar')
botonFinalizar.onclick = () => {
  const totalCompra = carrito
    .map((prod) => prod.precio * prod.cantidad)
    .reduce((elem1, elem2) => elem1 + elem2)
  alert(`El total de tu compra es ${totalCompra}`)
}
