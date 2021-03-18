import React from "react";

function Pokemon({ pokemonData }) {
	const pokemonDataDivs = [];
	for (const key in pokemonData) {
		pokemonDataDivs.push(
			<div>
				<span>{`${key}: `}</span>
				<span>{pokemonData[key]}</span>
			</div>
		);
	}
	return <div>{pokemonDataDivs}</div>;
}

export default Pokemon;
