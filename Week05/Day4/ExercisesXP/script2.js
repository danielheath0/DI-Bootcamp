const form = document.querySelector("form");

console.log(form);

const firstName = document.querySelector('input[name="firstname"]').value;
console.log(firstName);
const lastName = document.querySelector('input[name="lastname"]').value;
console.log(lastName);

const answer = document.querySelector("ul.usersAnswer");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const fname = document.getElementById("fname").value;
  console.log(fname);
  const lname = document.getElementById("lname").value;
  console.log(lname);
  const fNameLi = document.createElement("li");
  fNameLi.innerText = fname;
  answer.append(fNameLi);
  const lNameLi = document.createElement("li");
  lNameLi.innerText = lname;
  answer.append(lNameLi);
});
