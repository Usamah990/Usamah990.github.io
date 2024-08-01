async function fetchData() {
  try {
    let userInput = document.querySelector("input").value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${userInput}`
    );
    if (!response.ok) {
      throw new Error("Could not fetch data");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    let pokemonImg = document.querySelector("#pokemon-img");
    let pokemonName = document.querySelector("#name");
    let pokemonId = document.querySelector("#id");
    let pokemonAbilitiesList = document.querySelector("#ability");
    let button = document.querySelector("button");
    let pokemonAbilities = [];

    pokemonImg.setAttribute("src", `${pokemonSprite}`);
    pokemonImg.style.display = "block";

    pokemonId.innerText = `ID: ${data.id}`;
    pokemonName.innerText = `Name: ${data.name}`;

    for (let i = 0; i < data.abilities.length; i++) {
      pokemonAbilities.push(data.abilities[i].ability.name);
    }

    pokemonAbilitiesList.innerText = `Abilities: \n${pokemonAbilities}`;

    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
