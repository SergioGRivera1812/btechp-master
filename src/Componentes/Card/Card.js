import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import './Card.css';


function CardComponent() {
  return (
    <Container className='Contenido'>
      <br></br>
      <br></br>
      <Card className="text-center">
        <Card.Body className='Contenido'>
          <Card.Title className='Titulo1'>B Tech Innovación en Software</Card.Title>
          <Card.Text className='Contenido'>
          En el vertiginoso mundo de la industria moderna, la innovación y la eficiencia 
          son elementos clave para el éxito.En B Tech, nos enorgullece ser líderes en 
          la vanguardia de la ingeniería industrial, ofreciendo soluciones de vanguardia 
          que transforman la forma en que las empresas operan y prosperan.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CardComponent;
