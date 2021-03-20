const { Router } = require("express");

const collection = Router();

const myCollection = [];

collection.get("/", (req, res) => {
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
