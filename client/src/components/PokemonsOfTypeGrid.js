import React from "react";

function PokemonsOfTypeGrid({ pokemonNamesOfType }) {
	return (
		<div className="grid-container">
			{pokemonNamesOfType.map((pokemonName) => (
				<div>{pokemonName}</div>
			))}
		</div>
	);
}

export default PokemonsOfTypeGrid;
