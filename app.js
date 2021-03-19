const express = require("express");
const cors = require("cors");
const api = require("./routes");
const app = express();
const morgan = require("morgan");

app.use(cors());
app.use(express.json());

morgan.token("person", (req) => {
	return JSON.stringify(req.body);
});

app.use(morgan(":method :url :status :res[content-length] - :response-time ms :person"));

app.use(express.static("build"));

app.use("/api", api);

module.exports = app;
