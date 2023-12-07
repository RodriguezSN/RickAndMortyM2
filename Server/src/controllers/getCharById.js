const axios = require("axios");
const API = `https://rickandmortyapi.com/api/character`;
const API_KEY = "henrystaff";
const getCharById = (res, id) => {
	axios
		.get(`${API}/${id}`)
		.then((response) => {
			return response.data;
		})
		.then((data) => {
			const character = {
				id: data.id,
				name: data.name,
				status: data.status,
				species: data.species,
				gender: data.gender,
				origin: data.origin,
				image: data.image
			};
			return res
				.writeHead(200, { "Content-Type": "application/json" })
				.end(JSON.stringify(character));
		})
		.catch(() => {
			return res
				.writeHead(500, { "Content-type": "text/plain" })
				.end("Character not found");
		});
};

module.exports = getCharById;
