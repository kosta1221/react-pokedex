import "./styles/App.css";
import Pokemon from "./components/Pokemon";
import React, { useState, useEffect } from "react";
import fetchPokemonData from "./utils.js";

//types.map((type) => type.type.name)

function App() {
	const mockPokemonData = { id: null, name: "", height: null, weight: null, types: [] };
	const [data, setData] = useState({
		pokemonData: mockPokemonData,
		isFetching: false,
	});

	useEffect(() => {
		fetchPokemonData(data, setData);
	}, []);

	return (
		<div className="App">
			<h1>Pokedex</h1>
			<input id="search-input" />
			<button id="search-button">Search Pokemon!</button>
			<Pokemon
				pokemonData={data.pokemonData}
				isFetching={data.isFetching}
				setPokemonData={setData}
			/>
		</div>
	);
}

export default App;
