import { render, fireEvent, shallow, cleanup } from '@testing-library/react';
// import { debug } from 'webpack';
import App from './App';

describe('Registration data submission', () => {
	test('41. Form data submission is successful', () => {
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

		const handleSubmit = (e) => {
			e.preventDefault();
			alert('Thank you for your registration');
		};

		// // fireEvent.submit(form);
		// // fireEvent.click(pressRegisterButton);
		// const wrapper = shallow(<App />);
		// wrapper.find('form').simulate('submit', handleSubmit);
		// console.log(wrapper.state('error').value);
		// // expect(onSubmitMock.handleSubmit).toHaveBeenCalled();
	});
});