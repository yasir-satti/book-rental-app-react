import { render, fireEvent, shallow, cleanup } from '@testing-library/react';
// import { debug } from 'webpack';
import App from './App';

// const form = getByTestId("form");

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
			'Cannot be blank',
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