import React from "react";
import { catchPokemon } from "../utils";
import { useEffect } from "react";
import { fetchMyCollection } from "../utils";

function CollectionSection({ data, setData, myCollection, setMyCollection }) {
	useEffect(() => {
		fetchMyCollection(myCollection, setMyCollection);
	}, []);

	const pokemonData = data.pokemonData;

	const handleCatch = (event) => {
		console.log(pokemonData);
		catchPokemon(pokemonData, myCollection, setMyCollection);
	};

	const handleViewCollection = (event) => {
		console.log(myCollection);
	};

	return (
		<div className="collection-section">
			<div className="my-collection">
				{myCollection.map((pokemon) => (
					<div>
						<span>{pokemon.name}</span>
						<img
							src={pokemon.sprites["front_default"]}
							alt="pokemon"
							onMouseEnter={(event) => (event.target.src = pokemon.sprites["back_default"])}
							onMouseLeave={(event) => (event.target.src = pokemon.sprites["front_default"])}
						/>
					</div>
				))}
			</div>
			<button onClick={handleViewCollection}>View My Collection</button>
			<button onClick={handleCatch}>Catch</button>
		</div>
	);
}

export default CollectionSection;
