import "./styles/App.css";
import Pokemon from "./components/Pokemon";
import React, { useState } from "react";

function App() {
	const [pokemonData, setPokemonData] = useState({
		id: 12,
		name: "butterfree",
		base_experience: 178,
		height: 11,
		is_default: true,
		order: 16,
		weight: 320,
	});

	return (
		<div className="App">
			<h1>Pokedex</h1>
			<input id="search-input" />
			<button id="search-button">Search Pokemon!</button>
			<Pokemon pokemonData={pokemonData} setPokemonData={setPokemonData} />
		</div>
	);
}

export default App;
