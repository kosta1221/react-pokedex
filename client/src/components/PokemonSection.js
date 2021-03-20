import React from "react";
import Pokemon from "../components/Pokemon";
import Suggestions from "../components/Suggestions";

function PokemonSection({
	data,
	setData,
	inputValue,
	handleInputChange,
	searchSuggestions,
	searchButtonClickCount,
	setSearchButtonClickCount,
	setInputValue,
	pokemonsOfType,
	setPokemonsOfType,
}) {
	return (
		<section className="pokemon-section">
			<h1>Pokedex</h1>
			<div className="autocomplete">
				<input
					id="search-input"
					onChange={handleInputChange}
					placeholder="pikachu..."
					value={inputValue}
				/>
				<Suggestions
					id="search-suggestions"
					suggestions={searchSuggestions}
					setInputValue={setInputValue}
				/>
			</div>

			<button
				id="search-button"
				onClick={() => setSearchButtonClickCount(searchButtonClickCount + 1)}
			>
				Search Pokemon!
			</button>
			<Pokemon
				pokemonData={data.pokemonData}
				isFetching={data.isFetching}
				setPokemonData={setData}
				pokemonsOfType={pokemonsOfType}
				setPokemonsOfType={setPokemonsOfType}
			/>
		</section>
	);
}

export default PokemonSection;
