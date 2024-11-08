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
  Card,
  CardBody,
  Container,
  CardHeader,
  Row,
  Col,
} from "reactstrap";

// core components
import SimpleNavBar from "components/Navbars/SimpleNavBar";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Terms extends React.Component {

    
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {

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
                    <CardHeader className="bg-white pb-5">
                        <div className="text-muted text-center mb-3">
                        <h1 className="display-3">Términos y condiciones del usuario final</h1>
                        </div>
                        <p>
                        ¡Bienvenidos a Alkachof! Estamos encantados de tenerlos en nuestra plataforma. Por favor, lean cuidadosamente los siguientes términos de uso:
                        <br /><br />
                        Alkachof en fase beta: Alkachof es una plataforma en desarrollo (fase beta), por lo que pueden presentarse errores. Agradecemos su comprensión y paciencia mientras mejoramos la plataforma.
                        <br /><br />
                        Uso de datos e informacion privada: Alkachof no compartirá ni venderá la información personal de los usuarios a terceros. Alkachof usará los datos de los usuarios única y exclusivamente para mejorar la plataforma y ofrecer un mejor servicio.
                        <br /><br />
                        Uso de la plataforma: Los usuarios son libres de utilizar Alkachof para promocionar y vender sus productos y servicios siempre que estos sean legales conforme a las leyes de México. Está estrictamente prohibido publicar contenido pornográfico o exclusivo para mayores de 18 años. En Alkachof no podrás publicar servicios de acompañantes, prostitución, drogas, armas, órganos humanos, animales, servicios de hacking, piratería o apología del delíto, entre otros. Si tienes dudas sobre si tu producto o servicio es legal, por favor contáctanos.
                        <br /><br />
                        Restricciones de promoción: Los usuarios no pueden promover servicios o productos en nombre de otros usuarios sin su autorización.
                        <br /><br />
                        Responsabilidad en transacciones: El equipo de desarrollo y la plataforma no gestionarán ni se harán responsables de los pagos en las transacciones entre usuarios. Cada usuario es responsable de las interacciones que tenga dentro de Alkachof.
                        <br /><br />
                        Edad mínima para vender: Los usuarios deben tener al menos 18 años para poder usar la plataforma y vender productos o servicios.
                        <br /><br />
                        Protección de la privacidad: Les recomendamos encarecidamente no compartir información privada que pueda comprometer su seguridad o salud. La seguridad y el bienestar de nuestra comunidad es nuestra prioridad. Alkachof no se hace responsable de la información que los usuarios compartan en la plataforma ni de las consecuencias que puedan derivarse de ello.
                        </p>
                      </CardHeader>
                      <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                        
                            <p>Alkachof versión 0.1 - 2024</p>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
          </main>
        </>
      );
  }
}

export default withNavigation(Terms);