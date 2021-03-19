const { Router } = require("express");

const axios = require("axios");

const pokemon = Router();
const POKEAPI_URL = `https://pokeapi.co/api/v2/pokemon`;

pokemon.get(`/:name`, async (req, res) => {
	try {
		const { data } = await axios({
			method: "GET",
			url: `${POKEAPI_URL}/${req.params.name}`,
			headers: { "Content-Type": "application/json" },
		});

		const relevantData = {
			id: data.id,
			name: data.name,
			height: data.height,
			weight: data.weight,
			types: data.types.map((type) => type.type.name),
			sprites: data.sprites,
		};
		console.log(`Pokemon route + ${req.params.name}`);
		res.json(relevantData);
	} catch (error) {
		return res.status(404).json(error);
	}
});

module.exports = pokemon;
