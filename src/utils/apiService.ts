import { type SignUpFormData } from '../pages/SignUpPage/SignUpPage.schema';

// const URL = 'http://localhost:5001/api/registration';
const URL =
	'https://env-backendbookrentalapp.eba-mmucheux.eu-west-2.elasticbeanstalk.com/api/registration';

const headers = {
	'Content-Type': 'application/json',
};

const apiService = {
	create: async (payload: Partial<SignUpFormData>) => {
		const response = await fetch(URL, {
			method: 'POST',
			headers,
			body: JSON.stringify(payload),
		});
		return await response.json();
	},
};

// import { RegistrationFormData } from "../pages/RegistrationPage/RegistrationPage.schema";
// import axios from 'axios';

// // const url = 'http://localhost:5001/api/registration';
// const url = 'http://env-backendbookrentalapp.eba-mmucheux.eu-west-2.elasticbeanstalk.com/api/registration';

// const apiService = {

//     create: async (payload: Partial<RegistrationFormData>) => {
//         axios.post(url, payload)
//         //   .then((response) => {
//         //     if (response.data != null) {
//         //         alert("Registration data posting was successful!");
//         //     } else {
//         //         alert("Registration data posting ERROR!");
//         //     }
//         // });
//     },
// }

export default apiService;
