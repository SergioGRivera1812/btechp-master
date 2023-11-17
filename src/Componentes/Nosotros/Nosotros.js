import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import org from '../Nosotros/jerarquia.png';
import './Nosotros.css';

function CustomCard() {
  return (
    <Container className="Nosotros">
      <Card className="mb-3" style={{ maxWidth: '1500px' }}>
        <Row className="g-0">
          <Col md={4}>
            <Card.Img src={org} alt="Card image" className="img-fluid rounded-start" />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title className='tit'>Nosotros</Card.Title>
              <Card.Text className='conte'>
              En B Tech, estamos dedicados a liderar la revolución industrial. Nuestra historia se teje con décadas de experiencia 
              y un equipo de expertos apasionados que comparten una visión común: impulsar la innovación y la eficiencia en la industria. 
              <br></br>
              Desde nuestros humildes comienzos hasta nuestra posición actual como líderes en soluciones industriales, nuestra misión 
              sigue siendo la misma: superar las expectativas de nuestros clientes a través de la excelencia en ingeniería y un compromiso 
              inquebrantable con la calidad.Conócenos más y descubre por qué somos el socio ideal para impulsar tu éxito industrial.              
              </Card.Text>
              <Card.Text>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default CustomCard;
