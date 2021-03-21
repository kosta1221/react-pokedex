import React from "react";
import { catchPokemon, fetchMyCollection, releaseFromCollection } from "../utils";
import { useEffect, useRef } from "react";

function CollectionSection({
	data,
	setData,
	myCollection,
	setMyCollection,
	setErrorMessage,
	isCollectionDisplayed,
	setIscollectionDisplayed,
}) {
	const viewCollectionButton = useRef(null);
	console.log(viewCollectionButton);

	const myCollectionDisplay = useRef(null);
	console.log(myCollectionDisplay);

	useEffect(() => {
		fetchMyCollection(myCollection, setMyCollection, setErrorMessage);
	}, []);

	useEffect(() => {
		if (isCollectionDisplayed) {
			myCollectionDisplay.current.style.display = "grid";
			viewCollectionButton.current.innerText = "Hide My Collection";
		} else {
			myCollectionDisplay.current.style.display = "none";
			viewCollectionButton.current.innerText = "View My Collection";
		}
	}, [isCollectionDisplayed]);

	const pokemonData = data.pokemonData;

	const handleCatch = (event) => {
		console.log(pokemonData);
		catchPokemon(pokemonData, myCollection, setMyCollection, setErrorMessage);
	};

	const handleViewCollection = (event) => {
		console.log(myCollection);
		try {
			fetchMyCollection(myCollection, setMyCollection, setErrorMessage);
		} catch (error) {
			console.log(error);
			throw error;
		}

		setIscollectionDisplayed(!isCollectionDisplayed);
	};

	const handleRelease = (event) => {
		const pokemonId = event.target.getAttribute("pokemonid");
		console.log(pokemonId);
		releaseFromCollection(pokemonId, setMyCollection, setErrorMessage);
	};

	return (
		<div className="collection-section">
			<div ref={myCollectionDisplay} className="my-collection">
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
			<button ref={viewCollectionButton} className="btn btn-primary" onClick={handleViewCollection}>
				View My Collection
			</button>
			<button className="btn btn-primary" onClick={handleCatch}>
				Catch
			</button>
		</div>
	);
}

export default CollectionSection;
