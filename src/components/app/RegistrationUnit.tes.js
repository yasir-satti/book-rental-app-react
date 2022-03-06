import { render, fireEvent, shallow, cleanup } from '@testing-library/react';
// import { debug } from 'webpack';
import App from './App';

// const onSubmitMock = jest.fn();
// const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

// const emptyText = '';
// const firstNameText = getByTestId('enterFirstName');
// const middleNamesText = getByTestId('enterMiddleNames');
// const surNameText = getByTestId('enterSurname');
// // const dateOfBirthValue = getByTestId('enterDateOfBirth')
// const emailText = getByTestId('enterEmail');
// const retypeEmailText = getByTestId('retypeEmail');
// const address1Text = getByTestId('enterAddress1');
// const address2Text = getByTestId('enterAddress2');
// const cityTownText = getByTestId('enterCityTown');
// const postcodeText = getByTestId('enterPostcode');
// const passwordText = getByTestId('enterPassword');
// const retypePasswordText = getByTestId('retypePassword');

// const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
// const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
// const validSurNameFeedback = getByTestId('validSurNameFeedback');
// // const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
// const validEmailFeedback = getByTestId('validEmailFeedback');
// const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
// const validAddres1Feedback = getByTestId('validAddres1Feedback');
// const validAddres2Feedback = getByTestId('validAddres2Feedback');
// const validCityTownFeedback = getByTestId('validCityTownFeedback');
// const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
// const validPasswordFeedback = getByTestId('validPasswordFeedback');
// const validRetypePasswordFeedback = getByTestId('validRetypePasswordFeedback');

// const pressRegisterButton = getByTestId('pressRegister');
// // const form = getByTestId("form");

describe('Names', () => {
	test('1. Page registration form fields should be empty when the page is first loaded', () => {
		const onSubmitMock = jest.fn();
		const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emptyText = '';
		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
		const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
		const validSurNameFeedback = getByTestId('validSurNameFeedback');
		// const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
		const validEmailFeedback = getByTestId('validEmailFeedback');
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
		const validAddres1Feedback = getByTestId('validAddres1Feedback');
		const validAddres2Feedback = getByTestId('validAddres2Feedback');
		const validCityTownFeedback = getByTestId('validCityTownFeedback');
		const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
		const validPasswordFeedback = getByTestId('validPasswordFeedback');
		const validRetypePasswordFeedback = getByTestId(
			'validRetypePasswordFeedback',
		);

		const pressRegisterButton = getByTestId('pressRegister');

		expect(firstNameText).toHaveValue(emptyText);
		expect(middleNamesText).toHaveValue(emptyText);
		expect(surNameText).toHaveValue(emptyText);
		// expect(dateOfBirthValue).toHaveValue('10/01/2022');
		expect(emailText).toHaveValue(emptyText);
		expect(retypeEmailText).toHaveValue(emptyText);
		expect(address1Text).toHaveValue(emptyText);
		expect(address2Text).toHaveValue(emptyText);
		expect(cityTownText).toHaveValue(emptyText);
		expect(postcodeText).toHaveValue(emptyText);
		expect(passwordText).toHaveValue(emptyText);
		expect(retypePasswordText).toHaveValue(emptyText);
	});

	test('2. Valid input data is entered', () => {
		const onSubmitMock = jest.fn();
		const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emptyText = '';
		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
		const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
		const validSurNameFeedback = getByTestId('validSurNameFeedback');
		// const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
		const validEmailFeedback = getByTestId('validEmailFeedback');
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
		const validAddres1Feedback = getByTestId('validAddres1Feedback');
		const validAddres2Feedback = getByTestId('validAddres2Feedback');
		const validCityTownFeedback = getByTestId('validCityTownFeedback');
		const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
		const validPasswordFeedback = getByTestId('validPasswordFeedback');
		const validRetypePasswordFeedback = getByTestId(
			'validRetypePasswordFeedback',
		);

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			firstNameInput: 'Yasir',
			middleNamesInput: 'Kamal M H',
			surnameInput: 'Satti',
			emailInput: 'yasir.satti@and.digial',
			retypeEmailInput: 'yasir.satti@and.digital',
			address1Input: 'Bloc',
			address2Input: '17 Marble Street',
			cityTownInput: 'Manchester',
			postcodeInput: 'M2 3WA',
			passwordInput: '12039eU2js92',
			retypePasswordInput: '12039eU2js92',
		};

		fireEvent.change(firstNameText, {
			target: { value: testData['firstNameInput'] },
		});
		fireEvent.change(middleNamesText, {
			target: { value: testData['middleNamesInput'] },
		});
		fireEvent.change(surNameText, {
			target: { value: testData['surnameInput'] },
		});
		fireEvent.change(emailText, {
			target: { value: testData['emailInput'] },
		});
		fireEvent.change(retypeEmailText, {
			target: { value: testData['retypeEmailInput'] },
		});
		fireEvent.change(address1Text, {
			target: { value: testData['address1Input'] },
		});
		fireEvent.change(address2Text, {
			target: { value: testData['address2Input'] },
		});
		fireEvent.change(cityTownText, {
			target: { value: testData['cityTownInput'] },
		});
		fireEvent.change(postcodeText, {
			target: { value: testData['postcodeInput'] },
		});
		fireEvent.change(passwordText, {
			target: { value: testData['passwordInput'] },
		});
		fireEvent.change(retypePasswordText, {
			target: { value: testData['retypePasswordInput'] },
		});

		fireEvent.click(pressRegisterButton);

		expect(firstNameText).toHaveValue(testData['firstNameInput']);
		expect(middleNamesText).toHaveValue(testData['middleNamesInput']);
		expect(surNameText).toHaveValue(testData['surnameInput']);
		expect(emailText).toHaveValue(testData['emailInput']);
		expect(address1Text).toHaveValue(testData['address1Input']);
		expect(address2Text).toHaveValue(testData['address2Input']);
		expect(cityTownText).toHaveValue(testData['cityTownInput']);
		expect(postcodeText).toHaveValue(testData['postcodeInput']);
		expect(passwordText).toHaveValue(testData['passwordInput']);
		expect(retypePasswordText).toHaveValue(testData['retypePasswordInput']);
	});

	// test('3. Empty first name input form validation works', () => {
	// 	const testData = {
	// 		emptyFirstName: '',
	// 	};

	// 	fireEvent.change(firstNameText, {
	// 		target: { value: testData['emptyFirstName'] },
	// 	});
	// 	fireEvent.click(pressRegisterButton);
	// 	expect(validFirstNameFeedback).toHaveTextContent('cannot be blank');
	// });

	test('3. Empty first name input form validation works', () => {
		const onSubmitMock = jest.fn();
		const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emptyText = '';
		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
		const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
		const validSurNameFeedback = getByTestId('validSurNameFeedback');
		// const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
		const validEmailFeedback = getByTestId('validEmailFeedback');
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
		const validAddres1Feedback = getByTestId('validAddres1Feedback');
		const validAddres2Feedback = getByTestId('validAddres2Feedback');
		const validCityTownFeedback = getByTestId('validCityTownFeedback');
		const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
		const validPasswordFeedback = getByTestId('validPasswordFeedback');
		const validRetypePasswordFeedback = getByTestId(
			'validRetypePasswordFeedback',
		);

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			firstNameInput: '',
			middleNamesInput: 'Kamal M H',
			surnameInput: 'Satti',
			emailInput: 'yasir.satti@and.digial',
			retypeEmailInput: 'yasir.satti@and.digital',
			address1Input: 'Bloc',
			address2Input: '17 Marble Street',
			cityTownInput: 'Manchester',
			postcodeInput: 'M2 3WA',
			passwordInput: '12039eU2js92',
			retypePasswordInput: '12039eU2js92',
		};

		fireEvent.change(firstNameText, {
			target: { value: testData['firstNameInput'] },
		});
		fireEvent.change(middleNamesText, {
			target: { value: testData['middleNamesInput'] },
		});
		fireEvent.change(surNameText, {
			target: { value: testData['surnameInput'] },
		});
		fireEvent.change(emailText, {
			target: { value: testData['emailInput'] },
		});
		fireEvent.change(retypeEmailText, {
			target: { value: testData['retypeEmailInput'] },
		});
		fireEvent.change(address1Text, {
			target: { value: testData['address1Input'] },
		});
		fireEvent.change(address2Text, {
			target: { value: testData['address2Input'] },
		});
		fireEvent.change(cityTownText, {
			target: { value: testData['cityTownInput'] },
		});
		fireEvent.change(postcodeText, {
			target: { value: testData['postcodeInput'] },
		});
		fireEvent.change(passwordText, {
			target: { value: testData['passwordInput'] },
		});
		fireEvent.change(retypePasswordText, {
			target: { value: testData['retypePasswordInput'] },
		});

		fireEvent.click(pressRegisterButton);

		expect(firstNameText).toHaveValue(testData['firstNameInput']);
		expect(middleNamesText).toHaveValue(testData['middleNamesInput']);
		expect(surNameText).toHaveValue(testData['surnameInput']);
		expect(emailText).toHaveValue(testData['emailInput']);
		expect(address1Text).toHaveValue(testData['address1Input']);
		expect(address2Text).toHaveValue(testData['address2Input']);
		expect(cityTownText).toHaveValue(testData['cityTownInput']);
		expect(postcodeText).toHaveValue(testData['postcodeInput']);
		expect(passwordText).toHaveValue(testData['passwordInput']);
		expect(retypePasswordText).toHaveValue(testData['retypePasswordInput']);
	});

	test('4. First name input is not more than 30 char form validation works', () => {
		const onSubmitMock = jest.fn();
		const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emptyText = '';
		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
		const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
		const validSurNameFeedback = getByTestId('validSurNameFeedback');
		// const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
		const validEmailFeedback = getByTestId('validEmailFeedback');
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
		const validAddres1Feedback = getByTestId('validAddres1Feedback');
		const validAddres2Feedback = getByTestId('validAddres2Feedback');
		const validCityTownFeedback = getByTestId('validCityTownFeedback');
		const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
		const validPasswordFeedback = getByTestId('validPasswordFeedback');
		const validRetypePasswordFeedback = getByTestId(
			'validRetypePasswordFeedback',
		);

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			nameGreaterThan30Char: 'JohnPeterJackHughDouglasYasirEarl',
		};

		fireEvent.change(firstNameText, {
			target: { value: testData['nameGreaterThan30Char'] },
		});
		fireEvent.click(pressRegisterButton);
		debug(null, 10000000);
		expect(validFirstNameFeedback).toHaveTextContent(
			'name must be 30 characters or less',
		);
	});

	// test('4. First name input is not more than 30 char form validation works', () => {
	// 	const testData = {
	// 		nameGreaterThan30Char: 'JohnPeterJackHughDouglasYasirEarl',
	// 		middleNamesInput: 'Kamal M H',
	// 		surnameInput: 'Satti',
	// 		emailInput: 'yasir.satti@and.digial',
	// 		retypeEmailInput: 'yasir.satti@and.digital',
	// 		address1Input: 'Bloc',
	// 		address2Input: '17 Marble Street',
	// 		cityTownInput: 'Manchester',
	// 		postcodeInput: 'M2 3WA',
	// 		passwordInput: '12039eU2js92',
	// 		retypePasswordInput: '12039eU2js92',
	// 	};

	// 	fireEvent.change(firstNameText, {
	// 		target: { value: testData['nameGreaterThan30Char'] },
	// 	});
	// 	fireEvent.change(middleNamesText, {
	// 		target: { value: testData['middleNamesInput'] },
	// 	});
	// 	fireEvent.change(surNameText, {
	// 		target: { value: testData['surnameInput'] },
	// 	});
	// 	fireEvent.change(emailText, {
	// 		target: { value: testData['emailInput'] },
	// 	});
	// 	fireEvent.change(retypeEmailText, {
	// 		target: { value: testData['retypeEmailInput'] },
	// 	});
	// 	fireEvent.change(address1Text, {
	// 		target: { value: testData['address1Input'] },
	// 	});
	// 	fireEvent.change(address2Text, {
	// 		target: { value: testData['address2Input'] },
	// 	});
	// 	fireEvent.change(cityTownText, {
	// 		target: { value: testData['cityTownInput'] },
	// 	});
	// 	fireEvent.change(postcodeText, {
	// 		target: { value: testData['postcodeInput'] },
	// 	});
	// 	fireEvent.change(passwordText, {
	// 		target: { value: testData['passwordInput'] },
	// 	});
	// 	fireEvent.change(retypePasswordText, {
	// 		target: { value: testData['retypePasswordInput'] },
	// 	});

	// 	fireEvent.click(pressRegisterButton);

	// 	expect(validFirstNameFeedback).toHaveTextContent(
	// 		'name must be 30 characters or less'
	// 		);
	// });

	test('5. Valid first name input form validation works', () => {
		const onSubmitMock = jest.fn();
		const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emptyText = '';
		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
		const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
		const validSurNameFeedback = getByTestId('validSurNameFeedback');
		// const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
		const validEmailFeedback = getByTestId('validEmailFeedback');
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
		const validAddres1Feedback = getByTestId('validAddres1Feedback');
		const validAddres2Feedback = getByTestId('validAddres2Feedback');
		const validCityTownFeedback = getByTestId('validCityTownFeedback');
		const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
		const validPasswordFeedback = getByTestId('validPasswordFeedback');
		const validRetypePasswordFeedback = getByTestId(
			'validRetypePasswordFeedback',
		);

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			validFirstName: 'John',
		};

		fireEvent.change(firstNameText, {
			target: { value: testData['validFirstName'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validFirstNameFeedback).toHaveTextContent('');
	});

	// test('6. Middle name input is empty form validation works', () => {
	// 	const testData = {
	// 		validMiddleName: '',
	// 	};

	// 	fireEvent.change(middleNamesText, {
	// 		target: { value: testData['validMiddleName'] },
	// 	});
	// 	fireEvent.click(pressRegisterButton);
	// 	expect(validMiddleNameFeedback).toHaveTextContent('');
	// });

	test('6. Middle name input is empty form validation works', () => {
		const onSubmitMock = jest.fn();
		const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emptyText = '';
		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
		const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
		const validSurNameFeedback = getByTestId('validSurNameFeedback');
		// const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
		const validEmailFeedback = getByTestId('validEmailFeedback');
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
		const validAddres1Feedback = getByTestId('validAddres1Feedback');
		const validAddres2Feedback = getByTestId('validAddres2Feedback');
		const validCityTownFeedback = getByTestId('validCityTownFeedback');
		const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
		const validPasswordFeedback = getByTestId('validPasswordFeedback');
		const validRetypePasswordFeedback = getByTestId(
			'validRetypePasswordFeedback',
		);

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			firstNameInput: 'Yasir',
			validMiddleName: '',
			surnameInput: 'Satti',
			emailInput: 'yasir.satti@and.digial',
			retypeEmailInput: 'yasir.satti@and.digital',
			address1Input: 'Bloc',
			address2Input: '17 Marble Street',
			cityTownInput: 'Manchester',
			postcodeInput: 'M2 3WA',
			passwordInput: '12039eU2js92',
			retypePasswordInput: '12039eU2js92',
		};

		fireEvent.change(firstNameText, {
			target: { value: testData['firstNameInput'] },
		});
		fireEvent.change(middleNamesText, {
			target: { value: testData['validMiddleName'] },
		});
		fireEvent.change(surNameText, {
			target: { value: testData['surnameInput'] },
		});
		fireEvent.change(emailText, {
			target: { value: testData['emailInput'] },
		});
		fireEvent.change(retypeEmailText, {
			target: { value: testData['retypeEmailInput'] },
		});
		fireEvent.change(address1Text, {
			target: { value: testData['address1Input'] },
		});
		fireEvent.change(address2Text, {
			target: { value: testData['address2Input'] },
		});
		fireEvent.change(cityTownText, {
			target: { value: testData['cityTownInput'] },
		});
		fireEvent.change(postcodeText, {
			target: { value: testData['postcodeInput'] },
		});
		fireEvent.change(passwordText, {
			target: { value: testData['passwordInput'] },
		});
		fireEvent.change(retypePasswordText, {
			target: { value: testData['retypePasswordInput'] },
		});

		fireEvent.click(pressRegisterButton);

		expect(middleNamesText).toHaveValue(testData['validMiddleName']);
	});

	// test('7. Middle name input is not more than 30 char form validation works', () => {
	// 	const testData = {
	// 		validMiddleName: 'JohnPeterJackHughDouglasYasirEarl',
	// 	};

	// 	fireEvent.change(middleNamesText, {
	// 		target: { value: testData['validMiddleName'] },
	// 	});
	// 	fireEvent.click(pressRegisterButton);
	// 	expect(validMiddleNameFeedback).toHaveTextContent(
	// 		'Middle name must be 30 characters or less',
	// 	);
	// });

	test('7. Middle name input is not more than 30 char form validation works', () => {
		const onSubmitMock = jest.fn();
		const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emptyText = '';
		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
		const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
		const validSurNameFeedback = getByTestId('validSurNameFeedback');
		// const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
		const validEmailFeedback = getByTestId('validEmailFeedback');
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
		const validAddres1Feedback = getByTestId('validAddres1Feedback');
		const validAddres2Feedback = getByTestId('validAddres2Feedback');
		const validCityTownFeedback = getByTestId('validCityTownFeedback');
		const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
		const validPasswordFeedback = getByTestId('validPasswordFeedback');
		const validRetypePasswordFeedback = getByTestId(
			'validRetypePasswordFeedback',
		);

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			firstNameInput: 'Yasir',
			validMiddleName: 'JohnPeterJackHughDouglasYasirEarl',
			surnameInput: 'Satti',
			emailInput: 'yasir.satti@and.digial',
			retypeEmailInput: 'yasir.satti@and.digital',
			address1Input: 'Bloc',
			address2Input: '17 Marble Street',
			cityTownInput: 'Manchester',
			postcodeInput: 'M2 3WA',
			passwordInput: '12039eU2js92',
			retypePasswordInput: '12039eU2js92',
		};

		fireEvent.change(firstNameText, {
			target: { value: testData['firstNameInput'] },
		});
		fireEvent.change(middleNamesText, {
			target: { value: testData['validMiddleName'] },
		});
		fireEvent.change(surNameText, {
			target: { value: testData['surnameInput'] },
		});
		fireEvent.change(emailText, {
			target: { value: testData['emailInput'] },
		});
		fireEvent.change(retypeEmailText, {
			target: { value: testData['retypeEmailInput'] },
		});
		fireEvent.change(address1Text, {
			target: { value: testData['address1Input'] },
		});
		fireEvent.change(address2Text, {
			target: { value: testData['address2Input'] },
		});
		fireEvent.change(cityTownText, {
			target: { value: testData['cityTownInput'] },
		});
		fireEvent.change(postcodeText, {
			target: { value: testData['postcodeInput'] },
		});
		fireEvent.change(passwordText, {
			target: { value: testData['passwordInput'] },
		});
		fireEvent.change(retypePasswordText, {
			target: { value: testData['retypePasswordInput'] },
		});

		fireEvent.click(pressRegisterButton);

		expect(validMiddleNameFeedback).toHaveTextContent(
			'Middle name must be 30 characters or less',
		);
	});

	// test('8. Empty surname name input not allowed', () => {
	// 	const testData = {
	// 		validSurName: '',
	// 	};

	// 	fireEvent.change(surNameText, {
	// 		target: { value: testData['validSurName'] },
	// 	});
	// 	fireEvent.click(pressRegisterButton);
	// 	expect(validSurNameFeedback).toHaveTextContent('cannot be blank');
	// });

	test('8. Empty surname name input not allowed', () => {
		const onSubmitMock = jest.fn();
		const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emptyText = '';
		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
		const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
		const validSurNameFeedback = getByTestId('validSurNameFeedback');
		// const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
		const validEmailFeedback = getByTestId('validEmailFeedback');
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
		const validAddres1Feedback = getByTestId('validAddres1Feedback');
		const validAddres2Feedback = getByTestId('validAddres2Feedback');
		const validCityTownFeedback = getByTestId('validCityTownFeedback');
		const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
		const validPasswordFeedback = getByTestId('validPasswordFeedback');
		const validRetypePasswordFeedback = getByTestId(
			'validRetypePasswordFeedback',
		);

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			firstNameInput: 'Yasir',
			middleNamesInput: 'Kamal M H',
			validSurName: '',
			emailInput: 'yasir.satti@and.digial',
			retypeEmailInput: 'yasir.satti@and.digital',
			address1Input: 'Bloc',
			address2Input: '17 Marble Street',
			cityTownInput: 'Manchester',
			postcodeInput: 'M2 3WA',
			passwordInput: '12039eU2js92',
			retypePasswordInput: '12039eU2js92',
		};

		fireEvent.change(firstNameText, {
			target: { value: testData['firstNameInput'] },
		});
		fireEvent.change(middleNamesText, {
			target: { value: testData['middleNamesInput'] },
		});
		fireEvent.change(surNameText, {
			target: { value: testData['validSurName'] },
		});
		fireEvent.change(emailText, {
			target: { value: testData['emailInput'] },
		});
		fireEvent.change(retypeEmailText, {
			target: { value: testData['retypeEmailInput'] },
		});
		fireEvent.change(address1Text, {
			target: { value: testData['address1Input'] },
		});
		fireEvent.change(address2Text, {
			target: { value: testData['address2Input'] },
		});
		fireEvent.change(cityTownText, {
			target: { value: testData['cityTownInput'] },
		});
		fireEvent.change(postcodeText, {
			target: { value: testData['postcodeInput'] },
		});
		fireEvent.change(passwordText, {
			target: { value: testData['passwordInput'] },
		});
		fireEvent.change(retypePasswordText, {
			target: { value: testData['retypePasswordInput'] },
		});

		fireEvent.click(pressRegisterButton);

		expect(validSurNameFeedback).toHaveTextContent('cannot be blank');
	});

	test('9. Surname name input length 30 char or less', () => {
		const onSubmitMock = jest.fn();
		const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emptyText = '';
		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
		const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
		const validSurNameFeedback = getByTestId('validSurNameFeedback');
		// const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
		const validEmailFeedback = getByTestId('validEmailFeedback');
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
		const validAddres1Feedback = getByTestId('validAddres1Feedback');
		const validAddres2Feedback = getByTestId('validAddres2Feedback');
		const validCityTownFeedback = getByTestId('validCityTownFeedback');
		const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
		const validPasswordFeedback = getByTestId('validPasswordFeedback');
		const validRetypePasswordFeedback = getByTestId(
			'validRetypePasswordFeedback',
		);

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			validSurName: 'SattiWilshereRahmanAlexVeronaFergesunBekaham',
		};

		fireEvent.change(surNameText, {
			target: { value: testData['validSurName'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validSurNameFeedback).toHaveTextContent(
			'name must be 30 characters or less',
		);
	});

	// test('9. Surname name input length 30 char or less', () => {
	// 	const testData = {
	// 		firstNameInput: 'Yasir',
	// 		middleNamesInput: 'Kamal M H',
	// 		validSurName: 'SattiWilshereRahmanAlexVeronaFergesunBekaham',
	// 		emailInput: 'yasir.satti@and.digial',
	// 		retypeEmailInput: 'yasir.satti@and.digital',
	// 		address1Input: 'Bloc',
	// 		address2Input: '17 Marble Street',
	// 		cityTownInput: 'Manchester',
	// 		postcodeInput: 'M2 3WA',
	// 		passwordInput: '12039eU2js92',
	// 		retypePasswordInput: '12039eU2js92',
	// 	};

	// 	fireEvent.change(firstNameText, {
	// 		target: { value: testData['firstNameInput'] },
	// 	});
	// 	fireEvent.change(middleNamesText, {
	// 		target: { value: testData['middleNamesInput'] },
	// 	});
	// 	fireEvent.change(surNameText, {
	// 		target: { value: testData['validSurName'] },
	// 	});
	// 	fireEvent.change(emailText, {
	// 		target: { value: testData['emailInput'] },
	// 	});
	// 	fireEvent.change(retypeEmailText, {
	// 		target: { value: testData['retypeEmailInput'] },
	// 	});
	// 	fireEvent.change(address1Text, {
	// 		target: { value: testData['address1Input'] },
	// 	});
	// 	fireEvent.change(address2Text, {
	// 		target: { value: testData['address2Input'] },
	// 	});
	// 	fireEvent.change(cityTownText, {
	// 		target: { value: testData['cityTownInput'] },
	// 	});
	// 	fireEvent.change(postcodeText, {
	// 		target: { value: testData['postcodeInput'] },
	// 	});
	// 	fireEvent.change(passwordText, {
	// 		target: { value: testData['passwordInput'] },
	// 	});
	// 	fireEvent.change(retypePasswordText, {
	// 		target: { value: testData['retypePasswordInput'] },
	// 	});

	// 	fireEvent.click(pressRegisterButton);

	// 	expect(validSurNameFeedback).toHaveTextContent(
	// 		'name must be 30 characters or less'
	// 	);
	// });

	test('10. Valid surname name input', () => {
		const onSubmitMock = jest.fn();
		const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emptyText = '';
		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
		const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
		const validSurNameFeedback = getByTestId('validSurNameFeedback');
		// const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
		const validEmailFeedback = getByTestId('validEmailFeedback');
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
		const validAddres1Feedback = getByTestId('validAddres1Feedback');
		const validAddres2Feedback = getByTestId('validAddres2Feedback');
		const validCityTownFeedback = getByTestId('validCityTownFeedback');
		const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
		const validPasswordFeedback = getByTestId('validPasswordFeedback');
		const validRetypePasswordFeedback = getByTestId(
			'validRetypePasswordFeedback',
		);

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			validSurName: 'Satti',
		};

		fireEvent.change(surNameText, {
			target: { value: testData['validSurName'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validSurNameFeedback).toHaveTextContent('');
	});
});

// describe("Date of birth", () => {

//   test.skip("11. Date of birth form validation works", () => {
//     const testData = {
//       dateOfBirth: "12/01/2022",
//     };

//     fireEvent.change(dateOfBirthValue, {
//       target: { value: testData["dateOfBirth"] },
//     });
//     fireEvent.click(pressRegisterButton);
//     expect(dateOfBirthValue).toHaveValue(testData["dateOfBirth"]);
//   });
// });

describe('Email', () => {
	test('12. Empty email input form validation works', () => {
		const onSubmitMock = jest.fn();
		const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emptyText = '';
		// const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
		const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
		const validSurNameFeedback = getByTestId('validSurNameFeedback');
		// const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
		const validEmailFeedback = getByTestId('validEmailFeedback');
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
		const validAddres1Feedback = getByTestId('validAddres1Feedback');
		const validAddres2Feedback = getByTestId('validAddres2Feedback');
		const validCityTownFeedback = getByTestId('validCityTownFeedback');
		const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
		const validPasswordFeedback = getByTestId('validPasswordFeedback');
		const validRetypePasswordFeedback = getByTestId(
			'validRetypePasswordFeedback',
		);

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			emptyEmailInput: '',
		};

		fireEvent.change(emailText, {
			target: { value: testData['emptyEmailInput'] },
		});
		fireEvent.click(pressRegisterButton);
		console.log(validEmailFeedback);
		expect(validEmailFeedback).toHaveTextContent('Cannot be blank');
	});

	test('13. Not valid email input form validation works', () => {
		const onSubmitMock = jest.fn();
		const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emptyText = '';
		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
		const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
		const validSurNameFeedback = getByTestId('validSurNameFeedback');
		// const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
		const validEmailFeedback = getByTestId('validEmailFeedback');
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
		const validAddres1Feedback = getByTestId('validAddres1Feedback');
		const validAddres2Feedback = getByTestId('validAddres2Feedback');
		const validCityTownFeedback = getByTestId('validCityTownFeedback');
		const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
		const validPasswordFeedback = getByTestId('validPasswordFeedback');
		const validRetypePasswordFeedback = getByTestId(
			'validRetypePasswordFeedback',
		);

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			notValidEmailInput: 'yasir.sattiand.digial',
		};

		fireEvent.change(emailText, {
			target: { value: testData['notValidEmailInput'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validEmailFeedback).toHaveTextContent('Email entered is not valid');
	});

	test('14. Valid Email input form validation works', () => {
		const onSubmitMock = jest.fn();
		const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emptyText = '';
		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
		const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
		const validSurNameFeedback = getByTestId('validSurNameFeedback');
		// const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
		const validEmailFeedback = getByTestId('validEmailFeedback');
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
		const validAddres1Feedback = getByTestId('validAddres1Feedback');
		const validAddres2Feedback = getByTestId('validAddres2Feedback');
		const validCityTownFeedback = getByTestId('validCityTownFeedback');
		const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
		const validPasswordFeedback = getByTestId('validPasswordFeedback');
		const validRetypePasswordFeedback = getByTestId(
			'validRetypePasswordFeedback',
		);

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			emptyEmailInput: '',
			notValidEmailInput: 'yasir.sattiand.digial',
			validEmailInput: 'yasir.satti@and.digial',
		};

		fireEvent.change(emailText, {
			target: { value: testData['validEmailInput'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validEmailFeedback).toHaveTextContent('');
	});

	test('15. Both Email and retype input are empty validation works', () => {
		const onSubmitMock = jest.fn();
		const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emptyText = '';
		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
		const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
		const validSurNameFeedback = getByTestId('validSurNameFeedback');
		// const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
		const validEmailFeedback = getByTestId('validEmailFeedback');
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
		const validAddres1Feedback = getByTestId('validAddres1Feedback');
		const validAddres2Feedback = getByTestId('validAddres2Feedback');
		const validCityTownFeedback = getByTestId('validCityTownFeedback');
		const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
		const validPasswordFeedback = getByTestId('validPasswordFeedback');
		const validRetypePasswordFeedback = getByTestId(
			'validRetypePasswordFeedback',
		);

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			emptyEmailInput: '',
		};

		fireEvent.change(emailText, {
			target: { value: testData['emptyEmailInput'] },
		});
		fireEvent.change(retypeEmailText, {
			target: { value: testData['emptyEmailInput'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validRetypeEmailFeedback).toHaveTextContent('Cannot be blank');
	});

	test('16. Valid Email and empty retype input validation works', () => {
		const onSubmitMock = jest.fn();
		const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emptyText = '';
		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
		const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
		const validSurNameFeedback = getByTestId('validSurNameFeedback');
		// const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
		const validEmailFeedback = getByTestId('validEmailFeedback');
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
		const validAddres1Feedback = getByTestId('validAddres1Feedback');
		const validAddres2Feedback = getByTestId('validAddres2Feedback');
		const validCityTownFeedback = getByTestId('validCityTownFeedback');
		const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
		const validPasswordFeedback = getByTestId('validPasswordFeedback');
		const validRetypePasswordFeedback = getByTestId(
			'validRetypePasswordFeedback',
		);

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			emptyEmailInput: '',
			validEmailInput: 'yasir.satti@and.digial',
		};

		fireEvent.change(emailText, {
			target: { value: testData['validEmailInput'] },
		});
		fireEvent.change(retypeEmailText, {
			target: { value: testData['emptyEmailInput'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validRetypeEmailFeedback).toHaveTextContent(
			'Re-typed email does not match',
		);
	});

	test('17. Empty Email and valid email retype input validation works', () => {
		const onSubmitMock = jest.fn();
		const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emptyText = '';
		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
		const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
		const validSurNameFeedback = getByTestId('validSurNameFeedback');
		// const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
		const validEmailFeedback = getByTestId('validEmailFeedback');
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
		const validAddres1Feedback = getByTestId('validAddres1Feedback');
		const validAddres2Feedback = getByTestId('validAddres2Feedback');
		const validCityTownFeedback = getByTestId('validCityTownFeedback');
		const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
		const validPasswordFeedback = getByTestId('validPasswordFeedback');
		const validRetypePasswordFeedback = getByTestId(
			'validRetypePasswordFeedback',
		);

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			emptyEmailInput: '',
			validEmailInput: 'yasir.satti@and.digial',
		};

		fireEvent.change(emailText, {
			target: { value: testData['emptyEmailInput'] },
		});
		fireEvent.change(retypeEmailText, {
			target: { value: testData['validEmailInput'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validRetypeEmailFeedback).toHaveTextContent(
			'Re-typed email does not match',
		);
	});

	test('18. Correct emails entered but not matching', () => {
		const onSubmitMock = jest.fn();
		const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emptyText = '';
		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
		const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
		const validSurNameFeedback = getByTestId('validSurNameFeedback');
		// const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
		const validEmailFeedback = getByTestId('validEmailFeedback');
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
		const validAddres1Feedback = getByTestId('validAddres1Feedback');
		const validAddres2Feedback = getByTestId('validAddres2Feedback');
		const validCityTownFeedback = getByTestId('validCityTownFeedback');
		const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
		const validPasswordFeedback = getByTestId('validPasswordFeedback');
		const validRetypePasswordFeedback = getByTestId(
			'validRetypePasswordFeedback',
		);

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			validEmailInput: 'yassir_satti@hotmail.com',
			validRetypeEmailInput: 'yasir.satti@and.digial',
		};

		fireEvent.change(emailText, {
			target: { value: testData['validEmailInput'] },
		});
		fireEvent.change(retypeEmailText, {
			target: { value: testData['validRetypeEmailInput'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validRetypeEmailFeedback).toHaveTextContent(
			'Re-typed email does not match',
		);
	});

	test('19. Valid Email retype input form validation works', () => {
		const onSubmitMock = jest.fn();
		const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emptyText = '';
		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
		const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
		const validSurNameFeedback = getByTestId('validSurNameFeedback');
		// const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
		const validEmailFeedback = getByTestId('validEmailFeedback');
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
		const validAddres1Feedback = getByTestId('validAddres1Feedback');
		const validAddres2Feedback = getByTestId('validAddres2Feedback');
		const validCityTownFeedback = getByTestId('validCityTownFeedback');
		const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
		const validPasswordFeedback = getByTestId('validPasswordFeedback');
		const validRetypePasswordFeedback = getByTestId(
			'validRetypePasswordFeedback',
		);

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			validEmailInput: 'yasir.satti@and.digial',
			validRetypeEmailInput: 'yasir.satti@and.digial',
		};

		fireEvent.change(emailText, {
			target: { value: testData['validEmailInput'] },
		});
		fireEvent.change(retypeEmailText, {
			target: { value: testData['validRetypeEmailInput'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validRetypeEmailFeedback).toHaveTextContent('');
	});
});

describe('Addresse, city/Town and postcode', () => {
	const onSubmitMock = jest.fn();
	const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

	const emptyText = '';
	const firstNameText = getByTestId('enterFirstName');
	const middleNamesText = getByTestId('enterMiddleNames');
	const surNameText = getByTestId('enterSurname');
	// const dateOfBirthValue = getByTestId('enterDateOfBirth')
	const emailText = getByTestId('enterEmail');
	const retypeEmailText = getByTestId('retypeEmail');
	const address1Text = getByTestId('enterAddress1');
	const address2Text = getByTestId('enterAddress2');
	const cityTownText = getByTestId('enterCityTown');
	const postcodeText = getByTestId('enterPostcode');
	const passwordText = getByTestId('enterPassword');
	const retypePasswordText = getByTestId('retypePassword');

	const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
	const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
	const validSurNameFeedback = getByTestId('validSurNameFeedback');
	// const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
	const validEmailFeedback = getByTestId('validEmailFeedback');
	const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
	const validAddres1Feedback = getByTestId('validAddres1Feedback');
	const validAddres2Feedback = getByTestId('validAddres2Feedback');
	const validCityTownFeedback = getByTestId('validCityTownFeedback');
	const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
	const validPasswordFeedback = getByTestId('validPasswordFeedback');
	const validRetypePasswordFeedback = getByTestId(
		'validRetypePasswordFeedback',
	);

	const pressRegisterButton = getByTestId('pressRegister');

	test('20. Address 1 value cannot be blank', () => {
		const testData = {
			emptyAddress1: '',
		};

		fireEvent.change(address1Text, {
			target: { value: testData['emptyAddress1'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validAddres1Feedback).toHaveTextContent('Cannot be blank');
	});

	test('21. Address 1 name less than 30 characters', () => {
		const testData = {
			address1lessThan30Char: 'Flat 5, Dyson Court',
		};

		fireEvent.change(address1Text, {
			target: { value: testData['address1lessThan30Char'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validAddres1Feedback).toHaveTextContent('');
	});

	test('22. Address 1 value is 30 characters', () => {
		const testData = {
			address1Is30Char: 'Flat 5, Dyson Court, Hays Road',
		};

		fireEvent.change(address1Text, {
			target: { value: testData['address1Is30Char'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validAddres1Feedback).toHaveTextContent('');
	});

	test('23. Address 1 name is more than 30 characters', () => {
		const testData = {
			address1IsMoreThan30Char: 'Flat 5, Dyson Court, Hays Road, London',
		};

		fireEvent.change(address1Text, {
			target: { value: testData['address1IsMoreThan30Char'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validAddres1Feedback).toHaveTextContent(
			'name must be 30 characters or less',
		);
	});

	test('24. Address 2 value cannot be blank', () => {
		const testData = {
			emptyAddress2: '',
		};

		fireEvent.change(address2Text, {
			target: { value: testData['emptyAddress2'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validAddres2Feedback).toHaveTextContent('Cannot be blank');
	});

	test('25. Address 2 value less than 30 characters', () => {
		const testData = {
			address2lessThan30Char: 'Flat 5, Dyson Court',
		};

		fireEvent.change(address2Text, {
			target: { value: testData['address2lessThan30Char'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validAddres2Feedback).toHaveTextContent('');
	});

	test('26. Address 2 value is 30 characters', () => {
		const testData = {
			address2Is30Char: 'Flat 5, Dyson Court, Hays Road',
		};

		fireEvent.change(address2Text, {
			target: { value: testData['address2Is30Char'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validAddres2Feedback).toHaveTextContent('');
	});

	test('27. Address 2 name is more than 30 characters', () => {
		const testData = {
			address2IsMoreThan30Char: 'Flat 5, Dyson Court, Hays Road, London',
		};

		fireEvent.change(address2Text, {
			target: { value: testData['address2IsMoreThan30Char'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validAddres2Feedback).toHaveTextContent(
			'name must be 30 characters or less',
		);
	});

	test('28. City/town value cannot be blank', () => {
		const testData = {
			emptyCityTown: '',
		};

		fireEvent.change(cityTownText, {
			target: { value: testData['emptyCityTown'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validCityTownFeedback).toHaveTextContent('Cannot be blank');
	});

	test('29. City/town value less than 30 characters', () => {
		const testData = {
			CityTownLessThan30Char: 'Manchester',
		};

		fireEvent.change(cityTownText, {
			target: { value: testData['CityTownLessThan30Char'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validCityTownFeedback).toHaveTextContent('');
	});

	test('30. City/town value is 30 characters', () => {
		const testData = {
			CityTownIs30Char: 'Greater Manchester County rest',
		};

		fireEvent.change(cityTownText, {
			target: { value: testData['CityTownIs30Char'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validCityTownFeedback).toHaveTextContent('');
	});

	test('31. City/town value is more than 30 characters', () => {
		const testData = {
			CityTownIsMoreThan30Char: 'Greater Manchester County rest UK',
		};

		fireEvent.change(cityTownText, {
			target: { value: testData['CityTownIsMoreThan30Char'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validCityTownFeedback).toHaveTextContent(
			'name must be 30 characters or less',
		);
	});

	test('32. Empty postcode input is not valid', () => {
		const testData = {
			emptyPostcode: '',
		};

		fireEvent.change(postcodeText, {
			target: { value: testData['emptyPostcode'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validPostcodeFeedback).toHaveTextContent('Postcode is not valid!');
	});

	test('33. Valid postcode input', () => {
		const testData = {
			validPostcode: 'M9 8DR',
		};

		fireEvent.change(postcodeText, {
			target: { value: testData['validPostcode'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validPostcodeFeedback).toHaveTextContent('');
	});
});

describe('Password', () => {
	const onSubmitMock = jest.fn();
	const { debug, getByTestId } = render(<App onSubmit={onSubmitMock} />);

	const emptyText = '';
	// const firstNameText = getByTestId('enterFirstName');
	const middleNamesText = getByTestId('enterMiddleNames');
	const surNameText = getByTestId('enterSurname');
	// const dateOfBirthValue = getByTestId('enterDateOfBirth')
	const emailText = getByTestId('enterEmail');
	const retypeEmailText = getByTestId('retypeEmail');
	const address1Text = getByTestId('enterAddress1');
	const address2Text = getByTestId('enterAddress2');
	const cityTownText = getByTestId('enterCityTown');
	const postcodeText = getByTestId('enterPostcode');
	const passwordText = getByTestId('enterPassword');
	const retypePasswordText = getByTestId('retypePassword');

	const validFirstNameFeedback = getByTestId('validFirstNameFeedback');
	const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');
	const validSurNameFeedback = getByTestId('validSurNameFeedback');
	// const validDateOfBirthFeedback = getByTestId("validDateOfBirthFeedback");
	const validEmailFeedback = getByTestId('validEmailFeedback');
	const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');
	const validAddres1Feedback = getByTestId('validAddres1Feedback');
	const validAddres2Feedback = getByTestId('validAddres2Feedback');
	const validCityTownFeedback = getByTestId('validCityTownFeedback');
	const validPostcodeFeedback = getByTestId('validPostcodeFeedback');
	const validPasswordFeedback = getByTestId('validPasswordFeedback');
	const validRetypePasswordFeedback = getByTestId(
		'validRetypePasswordFeedback',
	);

	const pressRegisterButton = getByTestId('pressRegister');

	test('34. Password Cannot be blank', () => {
		const testData = {
			emptyPassword: '',
		};

		fireEvent.change(passwordText, {
			target: { value: testData['emptyPassword'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validPasswordFeedback).toHaveTextContent('Cannot be blank');
	});

	test('35. Password has to be at least 8 characters', () => {
		const testData = {
			passwordLessThanEightChar: '1928wsu',
		};

		fireEvent.change(passwordText, {
			target: { value: testData['passwordLessThanEightChar'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validPasswordFeedback).toHaveTextContent(
			'Password has to be at least 8 characters!',
		);
	});

	test('36. Password must contain at least one upper case character', () => {
		const testData = {
			longPasswordNoUppercaseWithSpecialCharacter: '20938eu239889j@',
		};

		fireEvent.change(passwordText, {
			target: {
				value: testData['longPasswordNoUppercaseWithSpecialCharacter'],
			},
		});
		fireEvent.click(pressRegisterButton);
		expect(validPasswordFeedback).toHaveTextContent(
			'Password must contain at least one upper case character',
		);
	});

	test('37. Password must contain at least one special character', () => {
		const testData = {
			longPasswordWithUppercaseNoSpecialCharacter: '2309dimx098234rH8u',
		};

		fireEvent.change(passwordText, {
			target: {
				value: testData['longPasswordWithUppercaseNoSpecialCharacter'],
			},
		});
		fireEvent.click(pressRegisterButton);
		expect(validPasswordFeedback).toHaveTextContent(
			'Password must contain at least one special character',
		);
	});

	test('38. Short Password input form validation works', () => {
		const testData = {
			shortPassword: 'sU982@',
		};

		fireEvent.change(passwordText, {
			target: { value: testData['shortPassword'] },
		});
		fireEvent.click(pressRegisterButton);

		expect(validPasswordFeedback).toHaveTextContent(
			'Password has to be at least 8 characters!',
		);
	});

	test('39. Valid Password', () => {
		const testData = {
			validPassword: '20938eU239889j@',
		};

		fireEvent.change(passwordText, {
			target: { value: testData['validPassword'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validPasswordFeedback).toHaveTextContent('');
	});

	test('40. Re-typed password does not match', () => {
		const testData = {
			validPassword: '20938eU239889j@',
			retypedPassword: '20938eu239889j@',
		};

		fireEvent.change(passwordText, {
			target: { value: testData['validPassword'] },
		});
		fireEvent.change(passwordText, {
			target: { value: testData['retypedPassword'] },
		});
		fireEvent.click(pressRegisterButton);

		expect(validRetypePasswordFeedback).toHaveTextContent(
			'Re-typed password does not match',
		);
	});
});

describe('Registration data submission', () => {
	test('41. Form data submission is successful', () => {
		const handleSubmit = (e) => {
			e.preventDefault();
			alert('Thank you for your registration');
		};

		// fireEvent.submit(form);
		// fireEvent.click(pressRegisterButton);
		const wrapper = shallow(<App />);
		wrapper.find('form').simulate('submit', handleSubmit);
		console.log(wrapper.state('error').value);
		// expect(onSubmitMock.handleSubmit).toHaveBeenCalled();
	});
});
