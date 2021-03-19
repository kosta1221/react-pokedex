import React from "react";

function Pokemon({ pokemonData, isFetching }) {
	const pokemonDataDivs = [];
	for (const key in pokemonData) {
		if (key === "sprites") continue;

		pokemonDataDivs.push(
			<div>
				<span>{`${key}: `}</span>
				<span>{pokemonData[key]}</span>
			</div>
		);
	}
	return (
		<div>
			{pokemonDataDivs}
			<img
				src={pokemonData.sprites["front_default"]}
				alt="pokemon"
				onMouseEnter={(event) => (event.target.src = pokemonData.sprites["back_default"])}
				onMouseLeave={(event) => (event.target.src = pokemonData.sprites["front_default"])}
			/>
		</div>
	);
}

export default Pokemon;
