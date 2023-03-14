import { type SignUpFormData } from '../pages/SignUpPage/SignUpPage.schema';

// const URL = 'http://localhost:5001/api/registration';
const URL =
	'http://env-backendbookrentalapp.eba-mmucheux.eu-west-2.elasticbeanstalk.com/api/registration';

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

export default apiService;
