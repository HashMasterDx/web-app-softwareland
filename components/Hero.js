import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Mueblería Hernández</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">Muebles rusticos hechos a su estilo elegancia y comodidad.</h1>
              <p className="text-muted mb-4 pb-2">Somos una empresa dedicada a la creación y fabricación de muebles rusticos para su hogar. Contamos con distintos diseños que harán que su casa
              luzca más espectacular de lo que luce actualmentes. También contamos con fabricación a la medida y diseño que usted nos proporcione.</p>
              <a href="#service" className="btn btn-warning">
                Vea nuestros productos! <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="http://www.lepetitchateaux.com/blog/wp-content/uploads/2018/11/muebles-r%C3%BAsticos.jpg" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;
