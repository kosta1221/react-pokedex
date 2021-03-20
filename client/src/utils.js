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

export const fetchPokemonTypes = async (type, setPokemonsOfType) => {
	console.log(`trying to fetch ${type} types...`);
	console.log(`${URL}/type/${type}`);
	try {
		const response = await axios({
			method: "GET",
			url: `${URL}/type/${type}`,
			headers: { "Content-Type": "application/json" },
		});
		const pokemonsOfType = response.data;
		console.log(response.data);
		setPokemonsOfType(pokemonsOfType);
	} catch (e) {
		console.log(e);
	}
};

export const catchPokemon = async (pokemon, myCollection, setMyCollection) => {
	console.log(`trying to catch(post) ${pokemon.name}...`);
	console.log(`${URL}/collection/catch`);
	try {
		const response = await axios({
			method: "POST",
			url: `${URL}/collection/catch`,
			headers: { "Content-Type": "application/json" },
			data: pokemon,
		});
		console.log(response.data[response.data.length - 1].name);
		console.log(response.data);
		setMyCollection([...response.data]);
	} catch (e) {
		console.log(e);
	}
};

export const fetchMyCollection = async (myCollection, setMyCollection) => {
	console.log(`trying to fetch my collection...`);
	console.log(`${URL}/collection`);
	try {
		const response = await axios({
			method: "GET",
			url: `${URL}/collection`,
			headers: { "Content-Type": "application/json" },
		});
		const fetchedCollection = response.data;
		console.log(response.data);
		setMyCollection([...fetchedCollection]);
	} catch (e) {
		console.log(e);
	}
};
