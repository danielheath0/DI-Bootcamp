const container = document.getElementById("container");

console.log(container);

const lists = document.querySelectorAll(".list li");
lists.forEach((li) => {
  if (li.textContent === "Pete") {
    li.textContent = "Richard";
  }
});

document.querySelectorAll('.list')[1].children[1].remove()

  
const listies = document.querySelectorAll('.list')

listies.forEach(ul => ul.querySelector('li').textContent = 'Daniel')

listies.forEach(ul => ul.classList.add('student_list'))

listies[0].classList.add('university')
listies[0].classList.add('attendance')

container.style.backgroundColor = 'lightblue'
listies[1].querySelector(':last-child').style.display = 'none'
listies[0].querySelector(':last-child').style.border = 'dashed 1px magenta'
document.body.style.fontSize = '20px'