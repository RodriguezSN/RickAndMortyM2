import React, { useState } from "react";

export default function SearchBar(props) {
	const [id, setId] = useState("");

	const handleChange = (event) => {
		const { value } = event.target;
		setId(value);
	};
	const handleClick = () => {
		props.onSearch(id);
		setId("");
	};

	const handleRandom = () => {
		props.characterRandom();
	};

	return (
		<div>
			<input type="text" onChange={handleChange} value={id} />
			<button onClick={handleClick}>Agregar</button>
			<button onClick={handleRandom}>Random</button>
		</div>
	);
}
