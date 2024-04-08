const form = document.getElementById("myForm");
const outputDiv = document.getElementById("output");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  const formData = {
    firstName: firstName,
    lastName: lastName,
  };

  const jsonData = JSON.stringify(formData);

  outputDiv.textContent = jsonData;
});
