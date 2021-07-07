import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const services = [
    { title : "Recamaras", desc : "Recamaras rusticas para mejorar el ambiente de tu hogar" },
    { title : "Cocinas", desc : "Cocinas rusticas para mejorar el ambiente de tu hogar" },
    { title : "Estanterías", desc : "Estanterías rusticas para mejorar el ambiente de tu hogar" },
    { title : "Salas", desc : "Salas rusticas para mejorar el ambiente de tu hogar" },
    { title : "Decoraciones", desc : "Decoraciones rusticas para mejorar el ambiente de tu hogar" },
    { title : "Puertas", desc : "Puertas rusticas para mejorar el ambiente de tu hogar" },
  ]

  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Productos</span></h3>
              <p className="text-muted">Adquiere cualquiera de nuestros productos, o cotiza a tu medida.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}
export default Service;
