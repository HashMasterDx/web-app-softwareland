import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  const links = [
    { id : 1, title : "Feature",
      child : [
          { title : "Recamaras", link : "/" },
          { title : "Estanterías", link : "/" },
          { title : "Cocinas", link : "/" },
          { title : "Puertas", link : "/" }
      ]
    },
    { id : 2, title : "Acerca de Nosotros",
      child : [
          { title : "Contactanos", link : "/" },
          { title : "FAQs", link : "/" },
          { title : "Politica de privacidad", link : "/" },
      ]
    },
  ];

  return (
    <section className="footer section">
      <Container>
        <Row>
          <Col lg={4}>
              <div className="mb-4">
                <p className="text-muted mt-4 mb-2">contacto@muebleria.hernandez.com</p>
                <h6 className="text-muted font-weight-normal">+52 443 123 3213</h6>
              </div>
          </Col>
          <Col lg={8}>
            <Row>
              {
                links.map((link, key) =>
                  <Col key={key} md={4}>
                    <h6 className="text-dark mb-3">{link.title}</h6>
                    <ul className="list-unstyled company-sub-menu">
                      {
                        link.child.map((fLink, key) =>
                          <li key={key}><a href={fLink.link}>{fLink.title}</a></li>
                        )
                      }
                    </ul>
                  </Col>
                )
              }

              <Col md={4}>
                <h6 className="text-dark mb-3">Nuesta dirección</h6>
                <p className="text-muted f-14">Periferico Revolucion 5540, Morelia, Michoacán, México</p>
                <h6 className="text-muted pb-2">Email: contacto@muebleria.hernandez.com</h6>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-linkedin"></i></a></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
<Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">2020 © Name. Design by Lennyn Leyva</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Footer;
