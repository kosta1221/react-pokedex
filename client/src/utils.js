import axios from "axios";
const URL = `/api`;

export const fetchPokemonData = async (data, setData, inputValue, setErrorMessage) => {
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
		console.log(e.response.data);
		setErrorMessage(e.response.data);
		setData({ pokemonData: data.pokemonData, isFetching: false });
	}
};

export const fetchPokemonNames = async (setAllPokemonNames, inputValue, setErrorMessage) => {
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
		console.log(e.response.data);
		setErrorMessage(e.response.data);
	}
};

export const fetchPokemonTypes = async (type, setPokemonsOfType, setErrorMessage) => {
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
		console.log(e.response.data);
		setErrorMessage(e.response.data);
	}
};

export const catchPokemon = async (pokemon, myCollection, setMyCollection, setErrorMessage) => {
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
		console.log(e.response.data);
		setErrorMessage(e.response.data);
	}
};

export const fetchMyCollection = async (myCollection, setMyCollection, setErrorMessage) => {
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
		console.log(e.response.data);
		setErrorMessage(e.response.data);
	}
};

export const releaseFromCollection = async (pokemonId, setMyCollection, setErrorMessage) => {
	console.log(`trying to release pokemon id: ${pokemonId} from collection...`);
	console.log(`${URL}/collection/${pokemonId}`);
	try {
		const response = await axios({
			method: "DELETE",
			url: `${URL}/collection/${pokemonId}`,
			headers: { "Content-Type": "application/json" },
		});

		const fetchedCollection = response.data;
		console.log(response.data);
		setMyCollection([...fetchedCollection]);
	} catch (e) {
		console.log(e.response.data);
		setErrorMessage(e.response.data);
	}
};

export function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
