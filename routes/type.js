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

		const relevantData = {
			pokemonNamesOfType: data.pokemon.map((pokemon) => pokemon.pokemon.name),
		};

		console.log(`Type route + ${req.params.name}`);
		res.json(relevantData);
	} catch (error) {
		return res.status(404).json(error);
	}
});

module.exports = type;
