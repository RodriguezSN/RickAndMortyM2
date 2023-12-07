import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
	return (
		<div
			style={{
				backgroundColor: "grey",
				margin: "20px",
				padding: "20px",
				borderRadius: "15px"
			}}
		>
			<button onClick={() => props.onClose(props.id)}>X</button>
			<Link to={`/detail/${props.id}`}>
				<h2>{props.name}</h2>
			</Link>
			<h4>ID: {props.id}</h4>
			<h4>status: {props.status}</h4>
			<h4>species: {props.species}</h4>
			<h4>gender: {props.gender}</h4>
			<h4>origin: {props.origin}</h4>
			<img src={props.image} alt={props.name} />
		</div>
	);
}

/*<button onClick={props.onClose}>X</button>
			<h2>{props.name}</h2>
			<h4>ID: {props.id}</h4>
			<h4>status: {props.status}</h4>
			<h4>species: {props.species}</h4>
			<h4>gender: {props.gender}</h4>
			<h4>origin: {props.origin}</h4>
			<img src={props.image} alt={props.name} /> */
