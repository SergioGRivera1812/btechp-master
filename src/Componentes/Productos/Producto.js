import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';



function CardComponent() {
  return (
    
    <Container className='Contenido'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Card className="text-center">
        <Card.Body className='Contenido'>
          <Card.Title className='Titulo1'>Productos</Card.Title>
          <Card.Text className='Contenido'>
          Explora nuestra amplia gama de productos de automatización y control con software en B Tech. 
          Desde sistemas de gestión de energía hasta soluciones de control industrial, ofrecemos las herramientas 
          que necesitas para optimizar tus procesos y mejorar la productividad.</Card.Text>
        </Card.Body>
      </Card>     
    </Container>

    


  );
}

export default CardComponent;
