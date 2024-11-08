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
import ForgotPasswordModal from "components/Modals/ForgotPasswordModal";

class LoginView extends React.Component {

    
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  state = {
    isForgotPasswordModalOpen: false,
    email: "",
    password: "",
    errors: {}
  };

  toggleForgotPasswordModal = () => {
    this.setState({
      isForgotPasswordModalOpen: !this.state.isForgotPasswordModalOpen,
    });
  };

  navigateToSignup = (e) => {
   e.preventDefault();
   this.props.navigate("/signup");
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validateForm = () => {
    const {email, password} = this.state;
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "El correo electrónico no es válido";
    }
    if (!password) {
        errors.password = "Se requiere una contraseña";
    }
    return errors
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();
    if (Object.keys(errors).length > 0) {
        this.setState({errors});
        return;
        }
    };


  render() {
    const {email, password, errors} = this.state;
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
                        <small>Ingresa con tus credenciales</small>
                      </div>
                      <Form role="form" onSubmit={this.handleSubmit}>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Email" 
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleInputChange} />
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
                              placeholder="Contraseña"
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
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="submit"
                          >
                            Ingresar
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <a
                        className="text-light"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            this.toggleForgotPasswordModal();
                        }}
                      >
                        <small>¿Olvidaste tu contraseña?</small>
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
                      <a
                        className="text-light"
                        href="#"
                        onClick={
                            this.navigateToSignup
                        }
                      >
                        <small>Crear nueva cuenta</small>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <ForgotPasswordModal
          isOpen={this.state.isForgotPasswordModalOpen}
          toggle={this.toggleForgotPasswordModal}
        />
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default withNavigation(LoginView);
