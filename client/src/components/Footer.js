import React from 'react';
import {Row, Col} from 'reactstrap';

const Footer = () => (
    <footer className="home-footer">
        <div>
        <Row>
            <Col xs="8">
                <h5>Información de contacto</h5>
                <br/>
                Email: contribuyecomunidad@gmail.com
                <br/>
                Número telefónico: +56 9 35123052
            </Col>


            <Col xs="4">
               <h5>Redes Sociales</h5>
               <br/>
               Facebook ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‎Whatsapp ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎Instagram
               <br/>
            </Col>
          </Row>
        </div>
    </footer>
)
export default Footer;