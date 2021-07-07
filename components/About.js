import React from 'react';
import { Container, Row, Col } from "reactstrap";
const About = () => {
return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">Nosotros</h3>
              <p className="text-muted">Somos una empresa con mas de 20 años en el mercado que se especializa en la fabricación de muebles rusticos para cualquier espacio.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">Los comentarios de nuestros clientes nos respaldan...</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Nuesta Misión</h6>
                <p className="text-muted font-weight-light">Nuestra misión es satisfacer las necesidades de nuestros clientes, ofreciendo productos de calidad con una fabricación artesanal.</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Nuestra Visión</h6>
                <p className="text-muted font-weight-light">Nuestra visión es poder llegar a muchos mas hogares del país, que conozcan nuestro trabajo y sigan confiando en nosotros para realizarlo.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;
