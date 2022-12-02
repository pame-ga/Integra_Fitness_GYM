import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../css/Contacto.css";
import facebook from '../image/facebook.png';
import instagram from '../image/instagram.png';
import whatsapp from '../image/whatsapp.png';
import youtube from '../image/youtube.png';

function Contacto() {
  return (
       <div className='container'>
      <div className='row'>
      <div className='col-12 col-md-6'>
        <Form className='formulario'>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="name" placeholder="Ingresa tu nombre" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresa tu contraseña" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAsunto">
            <Form.Label>Asunto</Form.Label>
            <Form.Control type="asunto" placeholder="Ingresa el asunto" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
          <Button className="btn" variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
        </div>
        <div className='col-12 col-md-6'>
          <h3> Redes Sociales</h3>
            <a href='https://www.facebook.com/IntegraFitnessGym'><img className='icons' src={facebook} alt='123' /></a>
            <a href='#'><img className='icons' src={instagram} alt='' /></a>
            <a href='#'><img className='icons' src={whatsapp} alt='' /></a>
            <a href='#'><img className='icons' src={youtube} alt='' /></a>
        </div>
      
        <div className='col-12'>
        <iframe className='map' src="https://maps.google.com/maps?q=integra%20fitness%20gym%20ucareo&t=&z=15&ie=UTF8&iwloc=&output=embed" 
        frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
      </div>
      </div>
  );

}

export default Contacto;


