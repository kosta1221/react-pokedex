import React from "react";

function Pokemon({ pokemonData, isFetching }) {
	const handleTypeClick = (event) => {
		console.log(event.target);
	};

	const pokemonDataDivs = [];
	for (const key in pokemonData) {
		if (key === "sprites" || key === "id") continue;

		if (Array.isArray(pokemonData[key]) && key === "types") {
			pokemonDataDivs.push(
				<div>
					<span>{`${key}: `}</span>
					{pokemonData[key].map((type, i) => {
						if (pokemonData[key].length - 1 === i) {
							return <span key={`type-${i}`} onClick={handleTypeClick}>{`${type}`}</span>;
						}
						return <span key={`type-${i}`} onClick={handleTypeClick}>{`${type}, `}</span>;
					})}
				</div>
			);

			continue;
		}

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
			<img src={pokemonData.sprites.other.dream_world["front_default"]} alt="pokemon-banner" />
		</div>
	);
}

export default Pokemon;
