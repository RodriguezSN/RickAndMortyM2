import React, { useState } from "react";
import validate from "./validation";

const Form = (props) => {
	const [userData, setUserData] = useState({
		email: "",
		password: ""
	});
	const [errors, setError] = useState({
		email: "Ingrese su email",
		password: "Ingrese su password"
	});
	const handleChange = (event) => {
		const { value, name } = event.target;
		setUserData({
			...userData,
			[name]: value
		});
		setError(
			validate({
				...userData,
				[name]: value
			})
		);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		props.login(userData);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="">Correo</label>
				<input
					key="email"
					id="email"
					name="email"
					type="email"
					value={userData.email}
					onChange={handleChange}
				/>
				<p style={{ color: "red" }}>{errors.email ? errors.email : null}</p>
				<br />
				<label htmlFor="">Password</label>
				<input
					type="password"
					key="password"
					id="password"
					name="password"
					value={userData.password}
					onChange={handleChange}
				/>
				<p style={{ color: "red" }}>{errors.password && errors.password}</p>
				<br />
				<button type="submit" disabled={errors.email || errors.password}>
					INGRESAR!!
				</button>
			</form>
		</div>
	);
};
export default Form;
// module export {Form, userData}
