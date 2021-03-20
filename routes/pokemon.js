const { Router } = require("express");

const axios = require("axios");

const pokemon = Router();

const POKEAPI_URL = `https://pokeapi.co/api/v2`;

pokemon.get(`/:name`, async (req, res) => {
	let name = req.params.name;
	if (name.includes("limit=")) {
		name = `?${name}`;
	}

	try {
		const { data } = await axios({
			method: "GET",
			url: `${POKEAPI_URL}/pokemon/${name}`,
			headers: { "Content-Type": "application/json" },
		});

		if (name.includes("limit=")) {
			return res.json(data);
		}

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
