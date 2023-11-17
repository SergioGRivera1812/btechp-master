import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import sergio from './sergio.jpeg';
import paco from './paco2.jpg';
import sam from './sam.jpg';
import cris from './cris.jpg';
import './Org.css';

function CardGrid() {
  return (
    <Container>
      <Row row-cols-1 row-cols-md-3 g-4>
        <Col>
          <Card>
            <Card.Img src={sergio} className='img' />
            <Card.Body>
              <Card.Title>Sergio G. Rivera</Card.Title>
              <Card.Text>
                CEO
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
          <Card.Img src={paco}  className='img'/>
            <Card.Body>
              <Card.Title>Francisco Fernandez</Card.Title>
              <Card.Text>
                Project Manager
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
          <Card.Img src={sam} className='img' />
            <Card.Body>
              <Card.Title>Samuel Cazares</Card.Title>
              <Card.Text>
                DevOps
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
          <Card.Img src={cris} className='img' />
            <Card.Body>
              <Card.Title>Cristofer Machado</Card.Title>
              <Card.Text>
                Developer
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardGrid;
