import FindFormErrors from './FindFormErrors';
import axios from 'axios';

const HandleSubmit = (e, form, setErrors) => {
	e.preventDefault();
	const newErrors =
		FindFormErrors();
		// form.firstName,
		// form.middleNames,
		// form.surName,
		// form.dateOfBirth,
		// form.email,
		// form.retypeEmail,
		// form.address1,
		// form.address2,
		// form.cityTown,
		// form.postcode,
		// form.password,
		// form.retypePassword,
	if (Object.keys(newErrors).length > 0) {
		setErrors(newErrors);
		console.log(newErrors);
	} else {
		alert('Thank you for your registration');
		const registrationUrl = 'http://localhost:8080/api/registration';
		const registrationData = {
			firstName: form.firstName,
			middleNames: form.middleNames,
			surName: form.surName,
			email: form.email,
			address1: form.address1,
			address2: form.address2,
			cityTown: form.cityTown,
			postcode: form.postcode,
			password: form.password,
		};
		axios.post(registrationUrl, registrationData).then((response) => {
			if (response.data != null) {
				console.log(registrationData);
				alert('Registration data posting was successful!');
				console.log('Posting response .... ', response);
			} else {
				alert('Registration data posting ERROR!');
				console.log(response.data);
			}
		});
	}
};

export default HandleSubmit;
