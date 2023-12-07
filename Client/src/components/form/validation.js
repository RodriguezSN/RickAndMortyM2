export default function validate(input) {
	const emailRegExp = /\S+@\S+\.\S+/;
	const errors = {};
	const passwordRegExp =
		/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[$@$!%?&])[A-Za-z\d$@$!%?&]{6,10}/;
	const regexPassword = /^(?=.*\d)/;

	if (!input.email.length) errors.email = "Ingrese su email";
	else {
		if (!emailRegExp.test(input.email))
			errors.email = "Debe ingresar un correo valido";
		if (input.email.length > 35)
			errors.email = "El email no puede tener más de 35 caracteres.";
	}
	if (!input.password.length) errors.password = "Ingrese su password";
	if (!regexPassword.test(input.password))
		errors.password =
			"Debe contener minuscula, mayuscula y ser entre 6 y 10 caracteres";
	if (input.password.length < 6 && input.password.length > 10)
		errors.password = "Entre 6 y 10 caracteres!!";
	return errors;
}
