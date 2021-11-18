import splash_image from "../../assets/image_book.jpeg";
import "./App.css";
import "./App.scss";

import HackeroneDatepicker from "./DatePicker";
import { Button, Card, Col, Form, Image, Nav, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <>
        <meta charset="utf-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </>

      <div>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossorigin="anonymous"
        ></script>

        <Image src={splash_image} fluid alt="logo" />
        <p>Book Rental Service</p>

        <p>Register</p>

        <Form>
          <Row>
            <Col xs="auto">
              <Form.Group className="mb-3" controlId="formFistName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" data-testid="enterFirstName" placeholder="Enter First name" />
                <Form.Text className="text-muted" >
                  Type your first name and middle names
                </Form.Text>
              </Form.Group>
            </Col>

            <Col xs="auto">
              <Form.Group className="mb-3" controlId="formMiddleNames">
                <Form.Label>Middle names</Form.Label>
                <Form.Control type="text" data-testid="enterMiddleNames" placeholder="Enter Middle name(s)" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs="auto">
              <Form.Group className="mb-3" controlId="formSuname">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" data-testid="enterSurname" placeholder="Enter Surname" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="DateOfBirth">
              <Form.Label>Enter date of birth</Form.Label>
              <HackeroneDatepicker />
            </Form.Group>
          </Row>

          <Row>
            <Col xs="auto">
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" data-testid="enterEmail" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3" controlId="formRetypeEmail">
                <Form.Label>Re-type Email address</Form.Label>
                <Form.Control type="email" data-testid="retypeEmail" placeholder="Re-type email address"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs="auto">
              <Form.Group className="mb-3" controlId="Address1">
                <Form.Label>Address 1</Form.Label>
                <Form.Control type="text" data-testid="enterAddress1"/>
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3" controlId="Address2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control type="text" data-testid="enterAddress2"/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs="auto">
              <Form.Group className="mb-3" controlId="CityTown">
                <Form.Label>City/Town</Form.Label>
                <Form.Control type="text" data-testid="enterCityTown"/>
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3" controlId="Postcode">
                <Form.Label>Post code</Form.Label>
                <Form.Control type="text" data-testid="enterPostcode"/>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Choose Password</Form.Label>
                <Form.Control type="password" data-testid="enterPassword"/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formRetypePassword">
                <Form.Label>Re-type Password</Form.Label>
                <Form.Control type="password" data-testid="retypePassword"/>
              </Form.Group>
            </Col>
          </Row>
        </Form>

        <Button variant="outline-info" size="lg" text="Register" data-testid="pressRegister">Register</Button>
      </div>
    </>
  );
}

export default App;
