const getStarWarsInfo = async () => {
  try {
    const person = await fetch(
      `https://www.swapi.tech/api/people/${Math.floor(Math.random() * 83) + 1}`
    );

    const personData = await person.json();

    const planetLocation = personData.result.properties.homeworld;

    const planetResponse = await fetch(planetLocation);

    const planetData = await planetResponse.json();

    const result = {
      personInfo: personData,
      planetInfo: planetData,
    };

    return result;
  } catch (error) {
    console.error("I have a bad feeling about this...");
  }
};

const handleClick = async (event) => {
  event.preventDefault();
  const loading = document.getElementById("loading");
  try {
    loading.style.display = "flex";
    
    const name = document.getElementById("name");
    name.innerHTML = "";
    const height = document.getElementById("height");
    height.innerHTML = "";
    const gender = document.getElementById("gender");
    gender.innerHTML = "";
    const birthYear = document.getElementById("birthYear");
    birthYear.innerHTML = "";
    const homeworld = document.getElementById("homeWorld");
    homeworld.innerHTML = "";

    const info = await getStarWarsInfo();

    if (
      !info.personInfo.message === "ok" ||
      !info.planetInfo.message === "ok"
    ) {
      throw new Error("Curse my metal body!");
    }
    //   console.log(info.personInfo);
    const stem = info.personInfo.result.properties;

    name.innerHTML = `${stem.name}`;

    height.innerHTML = `Height: ${stem.height} cm`;

    gender.innerHTML = `Gender: ${stem.gender}`;

    birthYear.innerHTML = `Birth year: ${stem.birth_year}`;

    homeworld.innerHTML = `Home world: ${info.planetInfo.result.properties.name}`;
  } catch (error) {
    console.error("R2-D2, you know better than to trust a strange computer!");
  } finally {
    loading.style.display = "none";
  }
};
