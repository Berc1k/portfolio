const getPokemonInfo = () => {
  const pokemonName = getById("pokemonSearch").value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  fetch(url, {
    method: "GET",
  }).then((data) => {
    data
      .json()
      .then((data) => {
        getById(
          "pokemon"
        ).style.backgroundImage = `url(${data.sprites.other.home.front_default})`;
        getById("pokemonId").innerText = data.id;
        getById("pokemonName").innerText = data.name;
        getById("pokemonHeight").innerText = data.height;
        getById("pokemonWeight").innerText = data.weight;
        getById("pokemonHp").innerText = data.stats[0].base_stat;
        getById("pokemonType").innerText = data.types[0].type.name;
        getById("pokemonAtk").innerText = data.stats[1].base_stat;
        getById("pokemonDef").innerText = data.stats[2].base_stat;
      })
      .catch((err) => console.log(err));
  });
};
