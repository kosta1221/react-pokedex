const { Router } = require("express");

const axios = require("axios");

const type = Router();

const POKEAPI_URL = `https://pokeapi.co/api/v2`;

type.get("/:name", async (req, res) => {
	let name = req.params.name;

	try {
		const { data } = await axios({
			method: "GET",
			url: `${POKEAPI_URL}/type/${name}`,
			headers: { "Content-Type": "application/json" },
		});

		const sprites = await Promise.all(
			data.pokemon.map(async (pokemon) => {
				const urlToFetch = pokemon.pokemon.url;
				try {
					const response = await axios({
						method: "GET",
						url: urlToFetch,
						headers: { "Content-Type": "application/json" },
					});

					return {
						front_default: response.data.sprites.front_default,
						back_default: response.data.sprites.back_default,
					};
				} catch (error) {
					console.log(error.response.data);
				}
			})
		);

		const relevantData = data.pokemon.map((pokemon, i) => ({
			name: pokemon.pokemon.name,
			sprites: sprites[i],
		}));

		console.log(`Type route + ${req.params.name}`);
		res.json(relevantData);
	} catch (error) {
		return res.status(404).json(error);
	}
});

module.exports = type;
