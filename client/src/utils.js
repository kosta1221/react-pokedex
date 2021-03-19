import axios from "axios";
const URL = `https://pokeapi.co/api/v2/pokemon`;

const fetchPokemonData = async (data, setData) => {
	console.log("trying to fetch...");
	try {
		console.log(data);
		setData({ pokemonData: data.pokemonData, isFetching: true });
		const response = await axios({
			method: "GET",
			url: `${URL}/pikachu`,
			headers: { "Content-Type": "application/json" },
		});
		const neededData = {
			id: response.data.id,
			name: response.data.name,
			height: response.data.height,
			weight: response.data.weight,
			types: response.data.types.map((type) => type.type.name),
		};
		setData({ pokemonData: neededData, isFetching: false });
	} catch (e) {
		console.log(e);
		setData({ pokemonData: data.pokemonData, isFetching: false });
	}
};

export default fetchPokemonData;
