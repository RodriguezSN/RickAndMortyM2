import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import axios from "axios";
import {
	Routes,
	Route,
	useParams,
	useLocation,
	useNavigate
} from "react-router-dom";
import Detail from "./components/detail/Detail.jsx";
import NotFound from "./components/notfound/NotFound.jsx";
import Form from "./components/form/Forms.jsx";

// const URLVieja = "https://rym2.up.railway.app/api/character";
// const URL = `http://localhost:3001/rickandmorty/character`;
// const API_KEY = "henrystaff";

function App() {
	const URL = `http://localhost:3001/api/character`;
	const navigate = useNavigate();
	const location = useLocation();
	const { pathname } = location;

	const param = useParams();
	const [characters, setCharacters] = useState([]);

	const [access, setAccess] = useState(false);
	const EMAIL = "sebas@gmail.com";
	const PASSWORD = "1234";

	function login(userData) {
		if (userData.password === PASSWORD && userData.email === EMAIL) {
			setAccess(true);
			navigate("/home");
		}
	}
	const logout = () => {
		setAccess(false);
	};
	useEffect(() => {
		!access && navigate("/");
		// !access && navigate("/home");
		if (pathname !== "/" && pathname !== "/home" && pathname !== "/about") {
			navigate("/notFound");
		}
	}, [access]);
	const comprobador = (characterApi) => {
		const idExist = characters.some(
			(character) => character.id === characterApi.id
		);
		if (!idExist) {
			setCharacters([...characters, characterApi]);
		} else alert("ya existe ese Personaje");
	};

	function onSearch(id) {
		axios(`${URL}/${id}`).then(({ data }) => {
			if (id >= 1 && id <= 826) {
				comprobador(data);
			} else window.alert("¡Solo se admite ID entre 1 y 826!");
		});
	}

	const characterRandom = () => {
		const randomId = Math.floor(Math.random() * 826) + 1;
		axios(`${URL}/${randomId}`).then(({ data }) => {
			comprobador(data);
		});
	};
	const onClouse = (id) => {
		setCharacters(
			characters.filter((character) => character.id !== Number(id))
		);
	};
	return (
		<div className="App">
			{pathname === "*" || pathname === "/" ? null : (
				<Nav
					onSearch={onSearch}
					characterRandom={characterRandom}
					logout={logout}
				/>
			)}

			<Routes>
				<Route path="/" element={<Form login={login} />} />
				<Route
					path="/home"
					element={<Cards characters={characters} onClouse={onClouse} />}
				/>
				<Route path="/about" element={<About />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
