import React from "react";

function PokemonsOfTypeGrid({ pokemonsOfType }) {
	return (
		<div className="grid-container">
			{pokemonsOfType.map((pokemon) => (
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
	);
}

export default PokemonsOfTypeGrid;
