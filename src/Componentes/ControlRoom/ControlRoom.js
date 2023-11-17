import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './controlR.css';
import { Container, Navbar } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receivedData: '',
    };
  }

  componentDidMount() {
    const socket = new WebSocket('ws://192.168.0.102/ws');

    // Connection opened
    socket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened');
    });

    // Listen for messages
    socket.addEventListener('message', (event) => {
      const data = event.data;
      console.log('Message from server:', data);

      // Update the state with the received data
      this.setState({ receivedData: data });
    });

    // Connection closed
    socket.addEventListener('close', (event) => {
      console.log('WebSocket connection closed');
    });

    // Save the socket in the component state for cleanup on unmount
    this.setState({ socket: socket });
  }

  componentWillUnmount() {
    // Close the WebSocket connection when the component is unmounted
    if (this.state.socket) {
      this.state.socket.close();
    }
  }

  // Función para enviar la solicitud al ESP32 para encender el LED
  Formula1 = () => {
    // Reemplaza 'tu_direccion_ip' con la dirección IP real de tu ESP32
    fetch('http://192.168.0.102/1')
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };

  // Función para enviar la solicitud al ESP32 para apagar el LED
  Formula2 = () => {
    // Reemplaza 'tu_direccion_ip' con la dirección IP real de tu ESP32
    fetch('http://192.168.0.102/2')
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };

  Formula3 = () => {
    // Reemplaza 'tu_direccion_ip' con la dirección IP real de tu ESP32
    fetch('http://192.168.0.102/3')
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };

  render() {
    return (
      <div className="dashboard">
        <div className="containers">
          <h2>Monitoreo en vivo</h2>
          {/* Resto del código */}
        </div>
        <br /><br /><br />
        <div id="lecturas">
          <h2>Capacidad</h2>
          <div className="circle2">50%</div>
          <div className="circle2">20%</div>
          <div className="circle2">40%</div>
        </div> 
        <br /><br /><br />
        <div className="recetario">
          {/* Añade el evento onClick para los botones de Encender y Apagar LED */}
          <button className="receta1" onClick={this.Formula1}>Formula 1</button>
          <button className="receta2" onClick={this.Formula2}>Formula 2</button>
          <button className="receta3" onClick={this.Formula3}>Formula 3</button>
        </div>
        <br />
        <label>Received Data: {this.state.receivedData}</label>
      </div>
    );
  }
}

export default App;
