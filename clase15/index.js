// url: localhost:8080/products?orden=asc&max=10
// metodo get

// fetch('/productos.json')
// .then(response=>response.json())
// .then(response=>console.log('respuesta',response.results))
// .catch(error=>console.log(error))
//console.log(pokemon)

const boton = document.getElementById('todos')
const lista = document.getElementById('lista')
const inputName = document.getElementById('name')
// boton.onclick = () => {
//   fetch(`https://rickandmortyapi.com/api/character?name=${inputName.value}`)
//     .then((response) => response.json())
//     .then((response) => {
//       const personajes = response.results
//       personajes.forEach((personaje) => {
//         const { name, image, species, status } = personaje
//         const li = document.createElement('li')
//         li.innerHTML = `
//     <h2>${name}</h2>
//     <img src=${image}>
//     <p>${species} ${status}</p>
//     `
//         lista.append(li)
//       })
//     })
//     .catch((error) => console.log(error))
// }
// async - await
boton.onclick = async () => {
  const infoApi = await fetch(
    `https://rickandmortyapi.com/api/character?name=${inputName.value}`
  ) // asincrona
  const response = await infoApi.json() // asincrona

  const personajes = response.results
  personajes.forEach((personaje) => {
    const { name, image, species, status } = personaje
    const li = document.createElement('li')
    li.innerHTML = `
      <h2>${name}</h2>
      <img src=${image}>
      <p>${species} ${status}</p>
      `
    lista.append(li)
  })
}
