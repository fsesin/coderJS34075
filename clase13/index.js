//Swal.fire('Bienvenido a JS')
//alert('Bienvenido a JS')

const inputNombre = document.getElementById('nombre')
const botonSweet = document.getElementById('sweetAlert')
const botonToastify = document.getElementById('toastify')
//botonSweet.onclick = () => alert(`Hola ${inputnombre.value}`)
botonSweet.onclick = () => {
    const ahora = DateTime.now().setLocale('es').toLocaleString(DateTime.DATETIME_HUGE)
  Swal.fire({
    title: 'BIENVENIDOS',
    text: `${ahora}`,
    icon: 'error',
    confirmButtonText: 'Ingresar',
    showCancelButton: true,
    cancelButtonText: 'Salir',
    background: 'light-blue',
    position: 'bottom-start',
    showConfirmButton: false,
    //timer: 3000,
  })
}

botonToastify.onclick = () => {
    Toastify({
        text: `Hola ${inputNombre.value}`,
        duration: 3000,
        position: "center",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        gravity: "bottom"
    }).showToast()
}

//const DateTime = luxon.DateTime
const {DateTime} = luxon


