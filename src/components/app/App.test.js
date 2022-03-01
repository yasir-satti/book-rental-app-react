import { render, fireEvent, screen } from "@testing-library/react";
import App from "../../components/app/App";

const onSubmitMock = jest.fn();
const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

const emptyText = "";
const firstNameText = getByTestId("enterFirstName");
const middleNamesText = getByTestId("enterMiddleNames");
const surNameText = getByTestId("enterSurname");
//const dateOfBirthValue = getByTestId('enterDateOfBirth')
const emailText = getByTestId("enterEmail");
const retypeEmailText = getByTestId("retypeEmail");
const address1Text = getByTestId("enterAddress1");
const address2Text = getByTestId("enterAddress2");
const cityTownText = getByTestId("enterCityTown");
const postcodeText = getByTestId("enterPostcode");
const passwordText = getByTestId("enterPassword");
const retypePasswordText = getByTestId("retypePassword");

const pressRegisterButton = getByTestId("pressRegister")

describe("New customer registration page", () => {
  test("Page registration form fields should be empty when the page is first loaded", () => {
    expect(firstNameText).toHaveValue(emptyText);
    expect(middleNamesText).toHaveValue(emptyText);
    expect(surNameText).toHaveValue(emptyText);
    // expect(dateOfBirthValue).toHaveValue()
    expect(emailText).toHaveValue(emptyText);
    expect(retypeEmailText).toHaveValue(emptyText);
    expect(address1Text).toHaveValue(emptyText);
    expect(address2Text).toHaveValue(emptyText);
    expect(cityTownText).toHaveValue(emptyText);
    expect(postcodeText).toHaveValue(emptyText);
    expect(passwordText).toHaveValue(emptyText);
    expect(retypePasswordText).toHaveValue(emptyText);
  });

  test("Valid input data is entered", () => {
    const testData = {
      'firstNameInput': "Yasir",
      'middleNamesInput': "Kamal M H",
      'surnameInput': "Satti",
      'emailInput': "yasir.satti@and.digial",
      'retypeEmailInput': "yasir.satti@and.digital",
      'address1Input': "Bloc",
      'address2Input': "17 Marble Street",
      'cityTownInput': "Manchester",
      'postcodeInput': "M2 3WA",
      'passwordInput': "12039eu2js92",
      'retypePasswordInput': "12039eu2js92"
    }

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

  test('Input form validation works', () => {

  })

  test('Form data submission is successful', () => {
    
  })
});