/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";

import SimpleNavBar from "components/Navbars/SimpleNavBar";

class LandingView extends React.Component {
  state = {
    items: ["ropa", "calzado", "libros", "juguetes", "herramientas", "muebles", 
        "electrodomésticos", "discos", "revistas", "vajilla", "decoración", 
        "bicicletas", "antigüedades", "joyas", "bolsos", "accesorios", "perfumes", 
        "peluches", "videojuegos", "cámaras", "plantas", "utensilios", "relojes", 
        "computadoras", "monitores", "teclados", "ratones", "carritos", "cunas", 
        "ropa de bebé", "pañales", "juguetes de bebé", "frutas", "verduras",
         "dulces", "bebidas", "alimentos caseros", "artesanías", "pintura", 
         "plomería", "electricidad", "jardinería", "limpieza", "mudanzas", 
         "carpintería", "cerrajería", "reparaciónes", 
         "instalación de pisos", "reparación de techos", "fontanería", 
         "soldadura", "instalación de ventanas", "mantenimiento", 
         "lavado de autos", "lavado de alfombras", "lo que sea"],
    itemSelection: 1


  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    this.interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * this.state.items.length);
        this.setState({ randomIndex });
      }, 500);
  }
  render() {
    const { items, randomIndex } = this.state;
    return (
      <>
        <SimpleNavBar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Compra y vende{" "}
                        <span>{items[randomIndex]}</span>
                      </h1>
                      <p className="lead text-white">
                        Alkachof es la plataforma de comercio local para pequeñ@s emprended@res. Puedes anunciar tus productos y servicios de manera gratuita y sin comisiones.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          color="info"
                        >
                          <span className="btn-inner--text">Crea una cuenta gratis</span>
                        </Button>
                        <Button
                          color="white"
                        >
                          <span className="btn-inner--text">Inicia sesión</span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-shop" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Crea un catálogo
                          </h6>
                          <p className="description mt-3">
                            Cuéntale a tus clientes qué vendes o qué servicios ofreces.
                            Establece tus precios, condiciones de entrega y formas de pago.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-camera-compact" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Sube tus productos
                          </h6>
                          <p className="description mt-3">
                            Publica hasta 25 articulos en tu catálogo.Tóma una foto, escribe una descripción y comienza a vender.
                          </p>
                          
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-notification-70" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Anuncia tu catálogo
                          </h6>
                          <p className="description mt-3">
                            Utiliza tus chats de venta, comparte el link en redes o usa la herramienta de QR para compartir tu catálogo con tus clientes.
                          </p>
                          
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/alka_user.webp")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-check-bold" />
                    </div>
                    <h3>Increíblemente fácil de usar</h3>
                    <p>
                     Alkachof esta diseñado para que puedas publicar tus productos y servicios de manera rápida y sencilla. No necesitas conocimientos técnicos para comenzar a vender.
                     
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-mobile-button" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Plataforma sencilla diseñada para teléfonos.
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-like-2" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Tus clientes no necesitan instalar apps.</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-bullet-list-67" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Deja que Alkachof organice tus ventas y tus envíos con el panel de control.
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/alka_robot.webp")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        La plataforma trabaja para ti
                      </h4>
                      <p className="lead text-italic text-white">
                       </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Mantén a tus clientes actualizados</h3>
                    <p className="lead">
                      Cuando tus clientes se subscriben a tu catálogo, reciben notificaciones cada vez que publicas un nuevo producto o servicio.
                    </p>
                    <p>
                     Dile adiós a subir fotos en chats de venta y a perder tiempo respondiendo mensajes. Con Alkachof tus clientes sabrán que tienes algo nuevo para ellos.
                    </p>
                    <p>
                     La herramienta te notifica cuando un cliente quiere realizar una compra. Puedes aceptar o rechazar la solicitud y coordinar la entrega según tus condiciones.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ill/ill-2.svg")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="fa fa-heart" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Alkachof es gratis</h4>
                      <p className="text-white">
                        En Alkachof creemos que la tecnología debe ser accesible para tod@s. Por eso, no cobramos comisiones por tus ventas ni por el uso de la plataforma.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            
                          </h5>
                          <p>
                            Somos fieles a nuestra misión de apoyar a pequeñ@s emprended@res. Por eso, no venderemos tus datos personales ni los de tus clientes a terceros.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="fa fa-handshake-o" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Queremos verte crecer
                          </h5>
                          <p>
                            Alkachof es una plataforma en constante evolución. Estamos trabajando en nuevas herramientas y funcionalidades para que puedas vender más y mejor.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Nos encantará tenerte</h2>
                  <p className="lead text-muted">
                    Alkachof es una plataforma de comercio local para pequeñ@s emprended@res. Esperamos crecer contigo y verte alcanzar tus metas.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                        Hicimos este sitio para ti.
                      </h3>
                      <p className="lead text-white mt-3">
                        Esperamos que Alkachof sea una herramienta útil para ti. Si tienes alguna sugerencia o comentario, no dudes en contactarnos.
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        size="lg"
                      >
                        Contacto
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default LandingView;
