import React from "react";
import { catchPokemon, fetchMyCollection, releaseFromCollection } from "../utils";
import { useEffect } from "react";

function CollectionSection({ data, setData, myCollection, setMyCollection, setErrorMessage }) {
	useEffect(() => {
		fetchMyCollection(myCollection, setMyCollection, setErrorMessage);
	}, []);

	const pokemonData = data.pokemonData;

	const handleCatch = (event) => {
		console.log(pokemonData);
		catchPokemon(pokemonData, myCollection, setMyCollection, setErrorMessage);
	};

	const handleViewCollection = (event) => {
		console.log(myCollection);
		fetchMyCollection(myCollection, setMyCollection, setErrorMessage);
	};

	const handleRelease = (event) => {
		const pokemonId = event.target.getAttribute("pokemonid");
		console.log(pokemonId);
		releaseFromCollection(pokemonId, setMyCollection, setErrorMessage);
	};

	return (
		<div className="collection-section">
			<div className="my-collection">
				{myCollection.map((pokemon, i) => (
					<div className="card text-white bg-primary" key={`collection-pokemon-${i}`}>
						<span className="card-header">{pokemon.name}</span>
						<img
							src={pokemon.sprites["front_default"]}
							alt="pokemon"
							onMouseEnter={(event) => (event.target.src = pokemon.sprites["back_default"])}
							onMouseLeave={(event) => (event.target.src = pokemon.sprites["front_default"])}
						/>
						<button className="btn btn-warning" pokemonid={pokemon.id} onClick={handleRelease}>
							Release
						</button>
					</div>
				))}
			</div>
			<button className="btn btn-primary" onClick={handleViewCollection}>
				View My Collection
			</button>
			<button className="btn btn-primary" onClick={handleCatch}>
				Catch
			</button>
		</div>
	);
}

export default CollectionSection;
