/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

*/
import React from "react";
import withNavigation from "../withNavigation";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import SimpleNavBar from "components/Navbars/SimpleNavBar";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class SignupView extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  state = {
    name: "",
    email: "",
    password: "",
    errors: {},
  };

  navigateToTos = (e) => {
    e.preventDefault();
    this.props.navigate("/tos");
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
      if (name === "password") {
        this.checkPasswordStrength(value);
      }
    });
  };

  validateField = (name, value) => {
    let errors = { ...this.state.errors };

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errors.email = "Correo electrónico inválido";
      } else {
        delete errors.email;
      }
    }

    if (name === "password") {
      if (!value) {
        errors.password = "Se requiere una contraseña";
      } else {
        delete errors.password;
      }
    }

    this.setState({ errors });
  };

  validateForm = () => {
    const { email, password } = this.state;
    const errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Correo electrónico inválido";
    }

    if (!password) {
      errors.password = "Se requiere una contraseña";
    }

    return errors;
  };

  checkPasswordStrength = (password) => {
    let strength = "debil";
    if (password.length >= 8) {
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumbers = /\d/.test(password);
      const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      if (hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) {
        strength = "fuerte";
      } else if ((hasUpperCase || hasLowerCase) && hasNumbers) {
        strength = "suficiente";
      }
    }
    this.setState({ passwordStrength: strength });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();
    if (Object.keys(errors).length === 0) {
      // Submit the form
      console.log("Form submitted:", this.state);
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const {email, password, errors, passwordStrength } = this.state;
    return (
      <>
        <SimpleNavBar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Crea una cuenta gratis</small>
                      </div>
                      <Form role="form" onSubmit={this.handleSubmit}>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Correo electrónico" type="email" name="email" value={email} onChange={this.handleInputChange} />
                          </InputGroup>
                          {errors.email && (
                            <small className="text-danger">{errors.email}</small>
                          )}
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              autoComplete="off"
                              name="password"
                              value={password}
                              onChange={this.handleInputChange}
                            />
                          </InputGroup>
                          {errors.password && (
                            <small className="text-danger">{errors.password}</small>
                          )}
                        </FormGroup>
                        <div className="text-muted font-italic">
                          <small>
                           seguridad de contraseña:{" "}
                           <span className={`${passwordStrength === "fuerte" ? "text-success" : passwordStrength === "suficiente" ? "text-warning" : "text-danger"} font-weight-700`}>
                                {passwordStrength}
                              </span>
                          </small>
                        </div>
                        <Row className="my-4">
                          <Col xs="12">
                          <div className="text-center text-muted mb-4">
                            <small>Al crear una cuenta estas aceptando nuestra {""}
                            <a href="#" onClick={this.navigateToTos}>política de privacidad y términos</a>
                            </small>
                        </div>
                          </Col>
                        </Row>
                        <div className="text-center">
                          <Button
                            className="mt-4"
                            color="primary"
                            type="submit"
                          >
                            Crear cuenta
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default withNavigation(SignupView);
