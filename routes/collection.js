const { Router } = require("express");

const collection = Router();

let myCollection = [];

collection.get("/", (req, res) => {
	res.json(myCollection);
});

collection.delete("/:id", (req, res) => {
	let id = Number(req.params.id);
	console.log("id to delete " + id);

	const foundPokemon = myCollection.find((pokemon) => pokemon.id === id);

	if (!foundPokemon) {
		return res.status(404).json(`pokemon to delete with id/name of: ${id} not found`);
	}

	myCollection = myCollection.filter((pokemon) => {
		return pokemon.id !== id;
	});

	res.json(myCollection);
});

/* relevantData = {
			id: 
			name: 
			height: 
			weight: 
			types:
			sprites:
		}; */
collection.post("/catch", (req, res) => {
	const body = req.body;

	if (!body.id || !body.name || !body.height || !body.weight || !body.types || !body.sprites) {
		console.log("bad request to catch!");
		return res.status(400).json(`Received bad pokemon body!`);
	}

	const pokemonAlreadyExists = myCollection.find((pokemon) => pokemon.id === body.id);

	if (pokemonAlreadyExists) {
		console.log(`Bad request to catch! Pokemon ${body.name} already exists in collection`);
		return res
			.status(400)
			.json(`Bad request to catch! Pokemon ${body.name} already exists in collection`);
	}

	const pokemon = {
		id: body.id,
		name: body.name,
		height: body.height,
		weight: body.weight,
		types: body.types,
		sprites: body.sprites,
	};

	myCollection.push(pokemon);
	res.json(myCollection);
});

module.exports = { collection, myCollection };
