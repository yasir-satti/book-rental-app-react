import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import RegistrationPage from './RegistrationPage';

beforeEach(() => {
	render(<RegistrationPage />);
});

afterEach(cleanup);

test('1. Registration page form fields should be empty when the page is first loaded', () => {
	const firstNameText = screen.getByRole('textbox', { name: 'firstName' });
	const middleNameText = screen.getByRole('textbox', { name: 'middleName' });
	const surNameText = screen.getByRole('textbox', { name: 'surName' });
	const emailText = screen.getByRole('textbox', { name: 'email' });
	const confirmEmailText = screen.getByRole('textbox', {
		name: 'confirmEmail',
	});
	const address1Text = screen.getByRole('textbox', { name: 'address1' });
	const address2Text = screen.getByRole('textbox', { name: 'address2' });
	const cityTownText = screen.getByRole('textbox', { name: 'cityTown' });
	const postcodeText = screen.getByRole('textbox', { name: 'postcode' });
	const passwordText = screen.getByRole('textbox', { name: 'password' });
	const confirmPassswordText = screen.getByRole('textbox', {
		name: 'confirmPassword',
	});

	const emptyText = '';

	expect(firstNameText).toHaveTextContent(emptyText);
	expect(middleNameText).toHaveTextContent(emptyText);
	expect(surNameText).toHaveTextContent(emptyText);
	expect(emailText).toHaveTextContent(emptyText);
	expect(confirmEmailText).toHaveTextContent(emptyText);
	expect(address1Text).toHaveTextContent(emptyText);
	expect(address2Text).toHaveTextContent(emptyText);
	expect(cityTownText).toHaveTextContent(emptyText);
	expect(postcodeText).toHaveTextContent(emptyText);
	expect(passwordText).toHaveTextContent(emptyText);
	expect(confirmPassswordText).toHaveTextContent(emptyText);
});
