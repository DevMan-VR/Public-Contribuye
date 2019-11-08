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
                <br/>
                <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

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