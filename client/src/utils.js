import axios from "axios";
const URL = `http://localhost:3001/api/pokemon`;

export const fetchPokemonData = async (data, setData, inputValue) => {
	console.log("trying to fetch...");
	console.log(`${URL}/${inputValue}`);
	try {
		console.log(data);
		setData({ pokemonData: data.pokemonData, isFetching: true });
		const response = await axios({
			method: "GET",
			url: `${URL}/${inputValue}`,
			headers: { "Content-Type": "application/json" },
		});
		setData({ pokemonData: response.data, isFetching: false });
	} catch (e) {
		console.log(e);
		setData({ pokemonData: data.pokemonData, isFetching: false });
	}
};

export const fetchPokemonNames = async (setAllPokemonNames, inputValue) => {
	console.log("trying to fetch names...");
	console.log(`${URL}/${inputValue}`);
	try {
		const response = await axios({
			method: "GET",
			url: `${URL}/${inputValue}`,
			headers: { "Content-Type": "application/json" },
		});
		const pokemonNames = response.data.results.map((pokemon) => pokemon.name);
		setAllPokemonNames(pokemonNames);
	} catch (e) {
		console.log(e);
	}
};
