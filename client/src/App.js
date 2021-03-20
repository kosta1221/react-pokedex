import "./styles/App.css";

import React, { useState, useEffect } from "react";
import { fetchPokemonData, fetchPokemonNames } from "./utils.js";

import PokemonsOfTypeGrid from "./components/PokemonsOfTypeGrid";
import PokemonSection from "./components/PokemonSection";

function App() {
	const mockPokemonData = {
		id: null,
		name: "",
		height: null,
		weight: null,
		types: [],
		sprites: {
			other: {
				dream_world: {},
			},
		},
	};
	const [searchSuggestions, setSearchSuggestions] = useState([]);
	const [allPokemonNames, setAllPokemonNames] = useState([]);
	const [inputValue, setInputValue] = useState("pikachu");
	const [searchButtonClickCount, setSearchButtonClickCount] = useState(0);
	const [data, setData] = useState({
		pokemonData: mockPokemonData,
		isFetching: false,
	});
	const [pokemonsOfType, setPokemonsOfType] = useState([]);

	useEffect(() => {
		fetchPokemonNames(setAllPokemonNames, `limit=800`);

		/* Event listener for closing suggestion list when clicking anywhere */
		window.addEventListener("click", function (event) {
			document.querySelector(".suggestions").style.display = "none";
		});
	}, []);

	useEffect(() => {
		fetchPokemonData(data, setData, inputValue);
	}, [searchButtonClickCount]);

	useEffect(() => {
		console.log(inputValue);
		const searchSuggestions = allPokemonNames.filter((pokemonName) =>
			pokemonName.includes(inputValue)
		);
		setSearchSuggestions(searchSuggestions);
	}, [inputValue]);

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
		/* If suggestions are not displayed, display them when typing in the input */
		document.querySelector(".suggestions").style.display = "block";
	};

	return (
		<div className="App">
			<PokemonSection
				data={data}
				setData={setData}
				inputValue={inputValue}
				handleInputChange={handleInputChange}
				searchSuggestions={searchSuggestions}
				searchButtonClickCount={searchButtonClickCount}
				setSearchButtonClickCount={setSearchButtonClickCount}
				setInputValue={setInputValue}
				pokemonsOfType={pokemonsOfType}
				setPokemonsOfType={setPokemonsOfType}
			/>

			<PokemonsOfTypeGrid pokemonsOfType={pokemonsOfType} />
		</div>
	);
}

export default App;
