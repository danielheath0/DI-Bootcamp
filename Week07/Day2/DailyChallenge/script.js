const handleSubmit = async (event) => {
  event.preventDefault();

  const searchTerm = document.getElementById("search").value;

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?tag=${searchTerm}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    const imgObj = data.data.images.fixed_height.url;

    const container = document.getElementById("container");

    const imgDiv = document.createElement("div");

    imgDiv.innerHTML = `<img src="${imgObj}">`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      container.removeChild(imgDiv);
    });
    imgDiv.appendChild(deleteButton);
    container.appendChild(imgDiv);
  } catch (error) {
    console.error("Error", error);
  }
};

document.getElementById("deleteAll").addEventListener("click", () => {
  const container = document.getElementById("container");
  container.innerHTML = "";
});
