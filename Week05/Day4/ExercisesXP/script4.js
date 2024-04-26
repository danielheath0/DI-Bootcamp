const form = document.getElementById("MyForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let radius = document.getElementById("radius").value;

  let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  document.getElementById("volume").value = volume;
});
