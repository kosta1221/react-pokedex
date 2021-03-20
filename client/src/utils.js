import axios from "axios";
const URL = `http://localhost:3001/api`;

export const fetchPokemonData = async (data, setData, inputValue) => {
	console.log("trying to fetch...");
	console.log(`${URL}/pokemon/${inputValue}`);
	try {
		console.log(data);
		setData({ pokemonData: data.pokemonData, isFetching: true });
		const response = await axios({
			method: "GET",
			url: `${URL}/pokemon/${inputValue}`,
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
	console.log(`${URL}/pokemon/${inputValue}`);
	try {
		const response = await axios({
			method: "GET",
			url: `${URL}/pokemon/${inputValue}`,
			headers: { "Content-Type": "application/json" },
		});
		const pokemonNames = response.data.results.map((pokemon) => pokemon.name);
		setAllPokemonNames(pokemonNames);
	} catch (e) {
		console.log(e);
	}
};

export const fetchPokemonTypes = async (type) => {
	console.log(`trying to fetch ${type} types...`);
	console.log(`${URL}/type/${type}`);
	try {
		const response = await axios({
			method: "GET",
			url: `${URL}/type/${type}`,
			headers: { "Content-Type": "application/json" },
		});
		const pokemonNamesWithType = response.data;
		console.log(pokemonNamesWithType);
	} catch (e) {
		console.log(e);
	}
};
