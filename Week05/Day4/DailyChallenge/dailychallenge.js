const form = document.getElementById("libform");

const button = document.getElementById("lib-button");

button.addEventListener("click", function (event) {
  event.preventDefault();
  if (form.checkValidity()){

  const noun = document.getElementById("noun").value;
  const adjective = document.getElementById("adjective").value;
  const person = document.getElementById("person").value;
  const verb = document.getElementById("verb").value;
  const place = document.getElementById("place").value;

  const story = document.getElementById("story");

  const text = `Once upon a time, in the far-off land of ${place}, there lived a very ${adjective} ${noun}. This ${noun} was known far and wide, and everyone knew the ${noun}'s name, which was ${person}. ${person} loved nothing more than to ${verb}. And so, life in ${place} was always interesting.`;

  story.innerText = text;
} else {

}alert('Please fill in required fields.')});
