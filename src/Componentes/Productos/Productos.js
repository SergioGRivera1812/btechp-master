import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import formo from '../Productos/formo.jpeg';
import  jibe from '../Productos/formo.jpeg';
import bascula from '../Productos/formo.jpeg';
import '../Organigrama/Org.css';


function Productos() {
  return (
    <Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <Row row-cols-1 row-cols-md-3 g-4>
        <Col>
          <Card>
            <Card.Img src={formo} className='img' />
            <Card.Body>
              <Card.Title>Formo</Card.Title>
              <Card.Text>
                Sistema de formulación automatizada, con una excelente precision 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
          <Card.Img src={jibe}  className='img'/>
            <Card.Body>
              <Card.Title>Control Level</Card.Title>
              <Card.Text>
                Sistema controlador de nivel para silo de cemento con capacidad de
                guardar incrementos o decrementos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
          <Card.Img src={bascula} className='img' />
            <Card.Body>
              <Card.Title>Samuel Cazares</Card.Title>
              <Card.Text>
              Sistema controlador de nivel para silo de cemento con capacidad de
                guardar incrementos o decrementos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
   
  );
}

export default Productos;