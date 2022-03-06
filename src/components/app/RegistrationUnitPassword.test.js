import { render, fireEvent, shallow, cleanup } from '@testing-library/react';
// import { debug } from 'webpack';
import App from './App';

describe('Password', () => {
	test('34. Password Cannot be blank', () => {
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
			emptyPassword: '',
		};

		fireEvent.change(passwordText, {
			target: { value: testData['emptyPassword'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validPasswordFeedback).toHaveTextContent('Cannot be blank');
	});

	test('35. Password has to be at least 8 characters', () => {
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
			validPassword: '20938eU239889j@',
		};

		fireEvent.change(passwordText, {
			target: { value: testData['validPassword'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validPasswordFeedback).toHaveTextContent('');
	});

	test('40. Re-typed password does not match', () => {
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
