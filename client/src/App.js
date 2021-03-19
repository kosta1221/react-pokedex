import "./styles/App.css";
import Pokemon from "./components/Pokemon";
import React, { useState, useEffect } from "react";
import fetchPokemonData from "./utils.js";

//types.map((type) => type.type.name)

function App() {
	const mockPokemonData = {
		id: null,
		name: "",
		height: null,
		weight: null,
		types: [],
		sprites: {},
	};
	const [inputValue, setInputValue] = useState("pikachu");
	const [searchButtonClickCount, setSearchButtonClickCount] = useState(0);
	const [data, setData] = useState({
		pokemonData: mockPokemonData,
		isFetching: false,
	});

	useEffect(() => {
		fetchPokemonData(data, setData, inputValue);
	}, [searchButtonClickCount]);

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<div className="App">
			<h1>Pokedex</h1>
			<input id="search-input" onChange={handleInputChange} />
			<button
				id="search-button"
				onClick={() => setSearchButtonClickCount(searchButtonClickCount + 1)}
			>
				Search Pokemon!
			</button>
			<Pokemon
				pokemonData={data.pokemonData}
				isFetching={data.isFetching}
				setPokemonData={setData}
			/>
		</div>
	);
}

export default App;
