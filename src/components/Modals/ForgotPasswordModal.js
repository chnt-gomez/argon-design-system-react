import React from "react";
import { Button, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Modal, Row, Col } from "reactstrap";

class ForgotPasswordModal extends React.Component {
  state = {};
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  handleInputChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = () => {
    // Handle the email submission logic here
    console.log("Email submitted:", this.state.email);
    this.toggleModal("defaultModal");
  };

  render() {
    return (
        <Modal
        className="modal-dialog-centered"
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
      >
        <div className="modal-header">
          <h6 className="modal-title" id="modal-title-default">
            Recuperar contraseña
          </h6>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={this.props.toggle}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <Form>
            <InputGroup className="input-group-alternative mb-3">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-email-83" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Email"
                type="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </InputGroup>
          </Form>
        </div>
        <div className="modal-footer">
          <Button color="primary" type="button" onClick={this.handleSubmit}>
            Enviar
          </Button>
          <Button
            className="ml-auto"
            color="link"
            data-dismiss="modal"
            type="button"
            onClick={this.props.toggle}
          >
            Cancelar
          </Button>
        </div>
      </Modal>
    );
  }
}

export default ForgotPasswordModal;