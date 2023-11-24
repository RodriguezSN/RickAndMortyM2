import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
	const param = useParams();
	console.log(param);
	const { id } = param;
	const [character, setCharacter] = useState({});
	// console.log(character.origin);
	const URL = "https://rym2.up.railway.app/api/character";
	const API_KEY = "henrystaff";
	useEffect(() => {
		axios(`${URL}/${id}?key=${API_KEY}`).then(({ data }) => {
			if (data.name) {
				setCharacter(data);
			} else {
				window.alert("No hay personajes con ese ID");
			}
		});
		return setCharacter({});
	}, [id]);

	return (
		<div>
			<h1>{character.name}</h1>
			<h2>Status: {character.status}</h2>
			<h2>Specie: {character.species}</h2>
			<h2>Gender: {character.gender}</h2>
			<h2>Origin: {character.origin?.name}</h2>
			<img src={character.image} alt={character.name} />
		</div>
	);
};

export default Detail;
