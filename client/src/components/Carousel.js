import React from 'react';
import {Carousel} from 'react-bootstrap';


const Carrusel = () => (
    <Carousel>
    <Carousel.Item>
        <img
        className="d-block"
        src="https://via.placeholder.com/1400x500"
        alt="First slide"
        />
        <Carousel.Caption>
        <h3>Servicios ofrecidos por la comunidad y para la comunidad</h3>
        <p>Podrás encontrar aqui los servicios rebajados y voluntarios que ofrece la comunidad</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img

        src="https://via.placeholder.com/1400x500"
        alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Servicios Voluntarios y Rebajados</h3>
        <p>Hay mas de X servicios en todo el Pais que ya están siendo ofrecidos y llevamos un total de Y beneficiados</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img

        src="https://via.placeholder.com/1400x500"
        alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Acumula puntos de mérito y canjéalos</h3>
        <p>Los puntos de mérito se obtienen al brindar servicios voluntarios y/o rebajados, los que pueden ser cajeados por premios y otras ofertas!</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
)
export default Carrusel;