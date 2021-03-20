import "./styles/App.css";

import React, { useState, useEffect } from "react";
import { fetchPokemonData, fetchPokemonNames } from "./utils.js";

import PokemonsOfTypeGrid from "./components/PokemonsOfTypeGrid";
import PokemonSection from "./components/PokemonSection";
import CollectionSection from "./components/CollectionSection";

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
	const [errorMessage, setErrorMessage] = useState("");
	const [searchSuggestions, setSearchSuggestions] = useState([]);
	const [allPokemonNames, setAllPokemonNames] = useState([]);
	const [inputValue, setInputValue] = useState("pikachu");
	const [searchButtonClickCount, setSearchButtonClickCount] = useState(0);
	const [data, setData] = useState({
		pokemonData: mockPokemonData,
		isFetching: false,
	});
	const [pokemonsOfType, setPokemonsOfType] = useState([]);
	const [myCollection, setMyCollection] = useState([]);

	useEffect(() => {
		fetchPokemonNames(setAllPokemonNames, `limit=800`, setErrorMessage);

		/* Event listener for closing suggestion list when clicking anywhere */
		window.addEventListener("click", function (event) {
			document.querySelector(".suggestions").style.display = "none";
		});
	}, []);

	useEffect(() => {
		fetchPokemonData(data, setData, inputValue, setErrorMessage);
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
			<div className="pokemon-and-collection">
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
					setErrorMessage={setErrorMessage}
				/>
				<CollectionSection
					data={data}
					setData={setData}
					myCollection={myCollection}
					setMyCollection={setMyCollection}
					setErrorMessage={setErrorMessage}
				/>
			</div>
			<div className="alert alert-danger alert-dismissible fade show">{errorMessage}</div>
			<PokemonsOfTypeGrid
				pokemonsOfType={pokemonsOfType}
				data={data}
				setData={setData}
				setErrorMessage={setErrorMessage}
			/>
		</div>
	);
}

export default App;
