const express = require("express");
const cors = require("cors");
const api = require("./routes");
const app = express();
const morgan = require("morgan");

app.use(cors());
app.use(express.json());

morgan.token("reqbody", (req) => {
	const newObject = {};
	for (const key in req.body) {
		if (key === "sprites") {
			newObject.sprites = "Too many to print...";
			continue;
		}
		newObject[key] = req.body[key];
	}
	return JSON.stringify(newObject);
});

app.use(morgan(":method :url :status :res[content-length] - :response-time ms :reqbody"));

app.use(express.static("build"));

app.use("/api", api);

module.exports = app;
