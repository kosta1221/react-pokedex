import "./styles/App.css";

import React, { useState, useEffect, useRef } from "react";
import { fetchPokemonData, fetchPokemonNames } from "./utils.js";

import PokemonsOfTypeGrid from "./components/PokemonsOfTypeGrid";
import PokemonSection from "./components/PokemonSection";
import CollectionSection from "./components/CollectionSection";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
	const [pokemonLoading, setPokemonLoading] = useState(true);
	const [typeGridLoading, setTypeGridLoading] = useState(false);

	const [isCollectionDisplayed, setIscollectionDisplayed] = useState(false);
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

	const errorDiv = useRef(null);

	useEffect(() => {
		if (errorMessage === "") {
			errorDiv.current.style.display = "none";
		} else {
			errorDiv.current.style.display = "block";
		}
	}, [errorMessage]);

	useEffect(() => {
		fetchPokemonNames(setAllPokemonNames, `limit=800`, setErrorMessage);

		/* Event listener for closing suggestion list when clicking anywhere, and resetting error message */
		window.addEventListener("click", function (event) {
			document.querySelector(".suggestions").style.display = "none";
			setErrorMessage("");
		});
	}, []);

	useEffect(() => {
		fetchPokemonData(data, setData, inputValue, setErrorMessage, setPokemonLoading);
	}, [searchButtonClickCount]);

	useEffect(() => {
		console.log("input: ", inputValue);
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
					setTypeGridLoading={setTypeGridLoading}
					pokemonLoading={pokemonLoading}
				/>
				<CollectionSection
					data={data}
					setData={setData}
					myCollection={myCollection}
					setMyCollection={setMyCollection}
					setErrorMessage={setErrorMessage}
					isCollectionDisplayed={isCollectionDisplayed}
					setIscollectionDisplayed={setIscollectionDisplayed}
					setPokemonLoading={setPokemonLoading}
				/>
			</div>

			<div ref={errorDiv} className="alert alert-danger alert-dismissible fade show">
				{errorMessage}
			</div>

			<PokemonsOfTypeGrid
				pokemonsOfType={pokemonsOfType}
				data={data}
				typeGridLoading={typeGridLoading}
				setData={setData}
				setErrorMessage={setErrorMessage}
				setPokemonLoading={setPokemonLoading}
			/>
		</div>
	);
}

export default App;
