const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

const wrapper = document.getElementsByTagName('section')

// console.log(wrapper);

for (let index = 0; index < planets.length; index++) {
    let newDiv = document.createElement('div')
    newDiv.className = `planet ${planets[index].toLowerCase()}`;
    newDiv.innerText = planets[index]
    
    wrapper[0].appendChild(newDiv)    
}

