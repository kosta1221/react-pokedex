import React from "react";
import Loader from "react-loader-spinner";
import { fetchPokemonData } from "../utils";

function PokemonsOfTypeGrid({
	pokemonsOfType,
	data,
	setData,
	setErrorMessage,
	setPokemonLoading,
	typeGridLoading,
}) {
	const handleGridClick = (event) => {
		const pokemonName = event.target.getAttribute("name");
		fetchPokemonData(data, setData, pokemonName, setErrorMessage, setPokemonLoading);
	};

	if (typeGridLoading) {
		return <Loader type="MutatingDots" color="#00BFFF" height={100} width={100} />;
	} else if (pokemonsOfType.length === 0) {
		return null;
	} else {
		return (
			<div className="grid-container lvl1">
				{pokemonsOfType.map((pokemon, i) => {
					if (!pokemon || !pokemon.sprites) return null;
					return (
						<div className="card text-white bg-secondary" key={`type-grid-pokemon-${i}`}>
							<span className="card-header">{pokemon.name}</span>
							<img
								src={pokemon.sprites["front_default"]}
								alt="pokemon"
								onMouseEnter={(event) => (event.target.src = pokemon.sprites["back_default"])}
								onMouseLeave={(event) => (event.target.src = pokemon.sprites["front_default"])}
								name={pokemon.name}
								onClick={handleGridClick}
							/>
						</div>
					);
				})}
			</div>
		);
	}
}

export default PokemonsOfTypeGrid;
