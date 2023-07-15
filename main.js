// ? Async/await
async function fetchAvos() {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo')
  const body = await response.json()
  return body.data
}
const avocados = await fetchAvos()
console.log(avocados)
// top level await
// ? Estado: fuente de la verdad
// const avocados = [
//   {
//     name: 'Maluma Hass',
//     price: 1.15,
//     image: 'https://platzi-avo.vercel.app/_next/image?url=%2Fimages%2Fmaluma.jpg&w=750&q=75'
//   },
//   {
//     name: 'Maluma Hass',
//     price: 1.15,
//     image: 'https://platzi-avo.vercel.app/_next/image?url=%2Fimages%2Fmaluma.jpg&w=750&q=75'
//   },
//   {
//     name: 'Maluma Hass',
//     price: 1.15,
//     image: 'https://platzi-avo.vercel.app/_next/image?url=%2Fimages%2Fmaluma.jpg&w=750&q=75'
//   },
//   {
//     name: 'Maluma Hass',
//     price: 1.15,
//     image: 'https://platzi-avo.vercel.app/_next/image?url=%2Fimages%2Fmaluma.jpg&w=750&q=75'
//   }
// ]

// ? Seleccionar los nodos del DOM que vamos a usar

const avocadoList = document.querySelector('.section-1-list')

function createAvoCard(palta) {
  const cardContainer = document.createElement('a')
  cardContainer.classList.add("cards")
  // ? cardContainer.href = ''

  const cardImage = document.createElement('img')
  cardImage.src = 'https://platzi-avo.vercel.app' + palta.image
  cardImage.alt = palta.name

  const cardText = document.createElement('div')
  cardText.classList.add('card-text')

  const cardTextName = document.createElement('p')
  cardTextName.classList.add('card-text-name')
  cardTextName.textContent = palta.price

  const cardTextPrice = document.createElement('p')
  cardTextPrice.classList.add('card-text-price')
  cardTextPrice.textContent = palta.price

  cardText.append(cardTextName, cardTextPrice)
  cardContainer.append(cardImage, cardText)

  return cardContainer

}
for (const avocado of avocados) {
  const avocard = createAvoCard(avocado)
  avocadoList.append(avocard)
}
