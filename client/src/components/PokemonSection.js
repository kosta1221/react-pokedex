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
	setErrorMessage,
	setTypeGridLoading,
	pokemonLoading,
}) {
	const handleSearchButtonClick = () => {
		setSearchButtonClickCount(searchButtonClickCount + 1);
	};

	return (
		<section className="pokemon-section">
			<h1 className="main-header">Pokedex</h1>
			<div className="autocomplete">
				<input
					id="search-input"
					onChange={handleInputChange}
					placeholder="pikachu..."
					value={inputValue}
				/>

				<button id="search-button" onClick={handleSearchButtonClick}>
					🔍
				</button>

				<Suggestions
					id="search-suggestions"
					suggestions={searchSuggestions}
					setInputValue={setInputValue}
					handleSearchButtonClick={handleSearchButtonClick}
				/>
			</div>

			<Pokemon
				pokemonData={data.pokemonData}
				isFetching={data.isFetching}
				setPokemonData={setData}
				pokemonsOfType={pokemonsOfType}
				setPokemonsOfType={setPokemonsOfType}
				setErrorMessage={setErrorMessage}
				setTypeGridLoading={setTypeGridLoading}
				pokemonLoading={pokemonLoading}
			/>
		</section>
	);
}

export default PokemonSection;
