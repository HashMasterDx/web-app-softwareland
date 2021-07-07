import React from 'react';
import { Container, Row, Col } from "reactstrap";
const FeatureBox = (props) => {
  return (
    <>
    {
      props.features.map((feature, key) =>
      (feature.id % 2 !== 0) ?
        <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
          <Col md={5} >
            <div>
              <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="f-16 text-warning">Ver más <span className="right-icon ml-2">&#8594;</span></a>
              </div>
            </Col>
        </Row>
      :
      <Row key={key} className="align-items-center mt-5">
        <Col md={6}>
          <div className="mb-4">
            <div className="my-4">
              <i className="mdi mdi-account-group"></i>
            </div>
            <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
            <p className="text-muted mb-3 f-15">{feature.desc}</p>
            <a href={feature.link} className="f-16 text-warning">Ver más <span className="right-icon ml-2">&#8594;</span></a>
          </div>
        </Col>
        <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
          <div>
            <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
          </div>
        </Col>
      </Row>
      )
    }
    </>
  );
}
const Feature = () => {
const features = [
    {id : 1, img : "https://images.homify.com/c_fill,f_auto,q_0,w_740/v1456737593/p/photo/image/1366586/c25904aa-4dc0-4692-95bf-c493f6b1c763.jpg", title : "Mesas Rusticas", desc : "Fabricamos tus mesas rusticas para tu hogar.", link : "/"},
    {id : 2, img : "http://myoc.es/blog/wp-content/uploads/2017/03/MG_1858-copia.jpg", title : "Estanterías Rusticas", desc : "Fabricamos tus estanterías rusticas para tu hogar.", link : "/"},
    {id : 3, img : "https://static.vix.com/es/sites/default/files/styles/4x3/public/imj/hogartotal/M/Muebles-rusticos-de-madera-10.jpg", title : "Recamaras Rusticas", desc : "Fabricamos tus recamaras rusticas para tu hogar.", link : "/"},
  ];
return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Conócenos</span></h3>
              <p className="text-muted">Somos una empresa dedicada a la creación y fabricación de muebles rusticos para su hogar. Contamos con distintos diseños que
              harán que su casa luzca más espectacular de lo que luce actualmentes. También contamos con fabricación a la medida y diseño que usted nos proporcione.</p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
}
export default Feature;
