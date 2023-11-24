import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
const NotFound = () => {
	return (
		<div className="conteinerNotFound">
			<h1>LLEGASTE AL FINAL DEL UNIVERSO FELICIDADES!!</h1>
			<h2>ERROR 404</h2>
			<button>
				<Link to="/home">volver en el tiempo</Link>
			</button>
		</div>
	);
};

export default NotFound;
