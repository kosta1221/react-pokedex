import React from "react";
import { fetchPokemonTypes, capitalizeFirstLetter } from "../utils.js";

function Pokemon({ pokemonData, setPokemonsOfType, isFetching, setErrorMessage }) {
	const handleTypeClick = (event) => {
		const type = event.target.getAttribute("type");
		console.log(type);
		fetchPokemonTypes(type, setPokemonsOfType, setErrorMessage);
	};

	const pokemonDataDivs = [];
	for (const key in pokemonData) {
		if (key === "sprites" || key === "id") continue;

		if (Array.isArray(pokemonData[key]) && key === "types") {
			pokemonDataDivs.push(
				<div key={key} className="pokemon-data-div">
					<span>{`${capitalizeFirstLetter(key)}: `}</span>
					{pokemonData[key].map((type, i) => {
						if (pokemonData[key].length - 1 === i) {
							return (
								<span
									className="btn btn-outline-primary"
									key={`type-${i}`}
									type={type}
									onClick={handleTypeClick}
								>{`${type}`}</span>
							);
						}
						return (
							/* can add something to all spans which aren't the last one (like a comma) */
							<span
								className="btn btn-outline-primary"
								key={`type-${i}`}
								type={type}
								onClick={handleTypeClick}
							>{`${type}`}</span>
						);
					})}
				</div>
			);

			continue;
		}

		pokemonDataDivs.push(
			<div key={key} className="pokemon-data-div">
				<span>{`${capitalizeFirstLetter(key)}: `}</span>
				<span>{pokemonData[key]}</span>
			</div>
		);
	}
	return (
		<div>
			<div className="pokemon-data-except-big-artwork">
				<div>{pokemonDataDivs}</div>

				<img
					src={pokemonData.sprites["front_default"]}
					alt="pokemon"
					onMouseEnter={(event) => (event.target.src = pokemonData.sprites["back_default"])}
					onMouseLeave={(event) => (event.target.src = pokemonData.sprites["front_default"])}
				/>
			</div>

			<img
				className="big-artwork"
				src={pokemonData.sprites.other.dream_world["front_default"]}
				alt="pokemon-banner"
			/>
		</div>
	);
}

export default Pokemon;
