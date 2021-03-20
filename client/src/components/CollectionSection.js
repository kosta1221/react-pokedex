import React from "react";
import { catchPokemon } from "../utils";

function CollectionSection({ data, setData, myCollection, setMyCollection }) {
	const pokemonData = data.pokemonData;

	const handleCatch = (event) => {
		// const myNewCollection = [...myCollection, data];
		// setMyCollection(myNewCollection);
		console.log(pokemonData);
		catchPokemon(pokemonData);
	};

	return (
		<div className="collection-section">
			<button>View My Collection</button>
			<button onClick={handleCatch}>Catch</button>
		</div>
	);
}

export default CollectionSection;
