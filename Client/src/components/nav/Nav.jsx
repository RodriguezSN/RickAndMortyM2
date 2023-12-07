import React from "react";
import SearchBar from "../searchbar/SearchBar";
import "./Nav.css";
import { useLocation, useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

const Nav = (props) => {
	return (
		<div id="IdNav">
			<button onClick={props.logout}>Log out</button>

			<SearchBar
				onSearch={props.onSearch}
				characterRandom={props.characterRandom}
			/>
			<Link to="/about">
				<button>About</button>
			</Link>
			<Link to="/home">
				<button>Home</button>
			</Link>
		</div>
	);
};

export default Nav;

//(characterID) => window.alert(characterID)
