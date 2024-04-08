const navBar = document.getElementById('navBar')

navBar.setAttribute('id', 'socialNetworkNavigation')

const newLi = document.createElement('li')

const textNode = document.createTextNode('Logout')

newLi.appendChild(textNode)
const ul = document.getElementsByTagName('ul')[0]
ul.appendChild(newLi)

const firstLi = ul.firstElementChild
const lastLi = ul.lastElementChild

console.log(firstLi.textContent)
console.log(lastLi.textContent);;