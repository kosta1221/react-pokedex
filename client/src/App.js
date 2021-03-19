import "./styles/App.css";
import Pokemon from "./components/Pokemon";
import React, { useState, useEffect } from "react";
import { fetchPokemonData, fetchPokemonNames } from "./utils.js";
import Suggestions from "./components/Suggestions";

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
			<h1>Pokedex</h1>
			<div className="autocomplete">
				<input
					id="search-input"
					onChange={handleInputChange}
					placeholder="pikachu..."
					value={inputValue}
				/>
				<Suggestions
					id="search-suggestions"
					suggestions={searchSuggestions}
					setInputValue={setInputValue}
				/>
			</div>

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
