import axios from "axios";
const URL = `http://localhost:3001/api/pokemon`;

const fetchPokemonData = async (data, setData, inputValue) => {
	console.log("trying to fetch...");
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

export default fetchPokemonData;
