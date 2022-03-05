import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

import splash_image from "../../assets/image_book.jpeg";
import "../app/App.css";
import "../app/App.scss";

import Datepicker from "./DatePicker";
import PasswordStrengthMeter from "./PassowrdStrengthMeter";

const Registration = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const [password, setPassword] = useState("");

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    if (field === "password") {
      setPassword(value);
    }
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  function isPasswordLengthEightOrMore(str) {
    return !(str.length < 8);
  }

  function hasPasswordOneUpperCaseCharacter(str) {
    return /[A-Z]/.test(str);
  }

  function hasPasswordOneSpecialCharacter(str) {
    return /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(str);
  }

  const findFormErrors = () => {
    const {
      firstName,
      middleNames,
      surName,
      dateOfBirth,
      email,
      retypeEmail,
      address1,
      address2,
      cityTown,
      postcode,
      password,
      retypePassword,
    } = form;

    const isEmailValid = (emailValue) => {
      const emailRegex =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      return emailRegex.test(emailValue);
    };

    const isPostcodeValid = (postcodeValue) => {
      const postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
      return postcodeRegEx.test(postcodeValue);
    };

    const newErrors = {};
    if (!firstName || firstName === "") {
      newErrors.firstName = "cannot be blank";
    } else {
      if (firstName.length > 30)
        newErrors.firstName = "name must be 30 characters or less";
    }

     if (middleNames !== undefined) {
       if (middleNames.length > 30)
        newErrors.middleNames = "Middle name must be 30 characters or less";
    }

    if (!surName || surName === "") {
      newErrors.surName = "cannot be blank";
    } else {
      if (surName.length > 30)
        newErrors.surName = "name must be 30 characters or less";
    }

    // if (true) {
    //   console.log("FindErrors: Date of birth selected...", dateOfBirth);
    //   newErrors.dateOfBirth = "date of birth is wrong!";
    // }

    if (email === undefined || email === "") {
      newErrors.email = "Cannot be blank";
    } else {
      if (!isEmailValid(email)) {
        newErrors.email = "Email entered is not valid";
      }
    }

    if (retypeEmail === undefined || retypeEmail === "") {
      newErrors.retypeEmail = "Cannot be blank";
    } else {
      if (!(retypeEmail === email)) {
        newErrors.retypeEmail = "Re-typed email does not match";
      }
    }

    if (!address1 || address1 === "") {
      newErrors.address1 = "Cannot be blank";
    } else {
      if (address1.length > 30)
        newErrors.address1 = "name must be 30 characters or less";
    }

    if (!address2 || address2 === "") {
      newErrors.address2 = "Cannot be blank";
    } else {
      if (address2.length > 30)
        newErrors.address2 = "name must be 30 characters or less";
    }

    if (!cityTown || cityTown === "") {
      newErrors.cityTown = "Cannot be blank";
    } else {
      if (cityTown.length > 30)
        newErrors.cityTown = "name must be 30 characters or less";
    }

    // if (!postcode || address1 === "") {
    //   newErrors.address1 = "Cannot be blank";
    // } else {
    //   if (address1.length > 30)
    //     newErrors.address1 = "name must be 30 characters or less";
    // }

    if (!isPostcodeValid(postcode))
      newErrors.postcode = "Postcode is not valid!";
    
    if (password === undefined || password === "") {
      newErrors.password = "Cannot be blank";
    } else if (!isPasswordLengthEightOrMore(password)) {
      newErrors.password = "Password has to be at least 8 characters!";
    } else if (!hasPasswordOneUpperCaseCharacter(password)) {
      newErrors.password =
        "Password must contain at least one upper case character";
    } else if (!hasPasswordOneSpecialCharacter(password))
      newErrors.password =
        "Password must contain at least one special character";

    if (!(retypePassword === password))
      newErrors.retypePassword = "Re-typed password does not match";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log(newErrors);
    } else {
      alert("Thank you for your registration");
      const registrationUrl = "http://localhost:8080/api/registration";
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
          alert("Registration data posting was successful!");
          console.log("Posting response .... ", response);
        } else {
          alert("Registration data posting ERROR!");
          console.log(response.data);
        }
      });
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <>
        <meta charSet="utf-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </>

      <div>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossOrigin="anonymous"
        ></script>

        <Image src={splash_image} fluid alt="logo" />
        <p>Book Rental Service</p>

        <p>Register</p>

        <Form data-testid="form" onSubmit={handleSubmit}>
          <Row>
            <Col xs="auto">
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  data-testid="enterFirstName"
                  placeholder="Enter First name"
                  onChange={(e) => setField("firstName", e.target.value)}
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback type="invalid" data-testid="validFirstNameFeedback">
                  {errors.firstName}
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  Type your first name and middle names
                </Form.Text>
              </Form.Group>
            </Col>

            <Col xs="auto">
              <Form.Group className="mb-3" controlId="formMiddleNames">
                <Form.Label>Middle names</Form.Label>
                <Form.Control
                  type="text"
                  data-testid="enterMiddleNames"
                  placeholder="Enter Middle name(s)"
                  onChange={(e) => setField("middleNames", e.target.value)}
                  isInvalid={!!errors.middleNames}
                />
                <Form.Control.Feedback type="invalid" data-testid="validMiddleNameFeedback">
                  {errors.middleNames}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs="auto">
              <Form.Group className="mb-3" controlId="formSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  data-testid="enterSurname"
                  placeholder="Enter Surname"
                  onChange={(e) => setField("surName", e.target.value)}
                  isInvalid={!!errors.surName}
                />
                <Form.Control.Feedback type="invalid" data-testid="validSurNameFeedback">
                  {errors.surName}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="DateOfBirth">
              <Form.Label>Enter date of birth</Form.Label>
              <Datepicker
                data-testid="enterDateOfBirth"
                // onChange={(e) => { setField("dateOfBirth", e.target.value)} }
                // handleChangeProps={setField}
                // handleChangeProps{ (e) => { setField("dateOfBirth", e.target.value) }}
                isInvalid={!!errors.dateOfBirth}
              />
              <Form.Control.Feedback type="invalid" data-testid="validDateOfBirthFeedback">
                {errors.dateOfBirth}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row>
            <Col xs="auto">
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  data-testid="enterEmail"
                  placeholder="Enter email"
                  onChange={(e) => setField("email", e.target.value)}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid" data-testid="validEmailFeedback">
                  {errors.email}
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3" controlId="formRetypeEmail">
                <Form.Label>Re-type Email address</Form.Label>
                <Form.Control
                  type="email"
                  data-testid="retypeEmail"
                  placeholder="Re-type email address"
                  onChange={(e) => setField("retypeEmail", e.target.value)}
                  isInvalid={!!errors.retypeEmail}
                />
                <Form.Control.Feedback type="invalid" data-testid="validRetypeEmailFeedback">
                  {errors.retypeEmail}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs="auto">
              <Form.Group className="mb-3" controlId="Address1">
                <Form.Label>Address 1</Form.Label>
                <Form.Control
                  type="text"
                  data-testid="enterAddress1"
                  onChange={(e) => setField("address1", e.target.value)}
                  isInvalid={!!errors.address1}
                />
                <Form.Control.Feedback type="invalid" data-testid="validAddres1Feedback">
                  {errors.address1}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3" controlId="Address2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  type="text"
                  data-testid="enterAddress2"
                  onChange={(e) => setField("address2", e.target.value)}
                  isInvalid={!!errors.address2}
                />
                <Form.Control.Feedback type="invalid" data-testid="validAddres2Feedback">
                  {errors.address2}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs="auto">
              <Form.Group className="mb-3" controlId="CityTown">
                <Form.Label>City/Town</Form.Label>
                <Form.Control
                  type="text"
                  data-testid="enterCityTown"
                  onChange={(e) => setField("cityTown", e.target.value)}
                  isInvalid={!!errors.cityTown}
                />
                <Form.Control.Feedback type="invalid" data-testid="validCityTownFeedback">
                  {errors.cityTown}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3" controlId="Postcode">
                <Form.Label>Post code</Form.Label>
                <Form.Control
                  type="text"
                  data-testid="enterPostcode"
                  onChange={(e) => setField("postcode", e.target.value)}
                  isInvalid={!!errors.postcode}
                />
                <Form.Control.Feedback type="invalid" data-testid="validPostcodeFeedback">
                  {errors.postcode}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Choose Password</Form.Label>
                <Form.Control
                  type="password"
                  data-testid="enterPassword"
                  onChange={(e) => setField("password", e.target.value)}
                  isInvalid={!!errors.password}
                />
                <PasswordStrengthMeter password={password} />
                <Form.Control.Feedback type="invalid" data-testid="validPasswordFeedback">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formRetypePassword">
                <Form.Label>Re-type Password</Form.Label>
                <Form.Control
                  type="password"
                  data-testid="retypePassword"
                  onChange={(e) => setField("retypePassword", e.target.value)}
                  isInvalid={!!errors.retypePassword}
                />
                <Form.Control.Feedback type="invalid" data-testid="validRetypePasswordFeedback">
                  {errors.retypePassword}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Button
            variant="outline-info"
            size="lg"
            text="Register"
            type="submit"
            data-testid="pressRegister"
          >
            Register
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Registration;
