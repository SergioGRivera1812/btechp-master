import React from 'react';
import { Carousel } from 'react-bootstrap';
import baner1 from './banner 1.png'; // Importa la imagen local
import baner2 from './banner 2.png'; // Importa la imagen local
import baner3 from './banner 3.png'; // Importa la imagen local

import './Banner.css';

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={baner1} className="d-block w-100" alt="Industria"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={baner2} className="d-block w-100" alt="Industria"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={baner3} className="d-block w-100" alt="Industria"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
