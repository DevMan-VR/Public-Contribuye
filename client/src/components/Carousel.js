import React from 'react';
import {Carousel} from 'react-bootstrap';
import img1 from '../images/portada1.jpg'; // relative path to image 
import img2 from '../images/pos2.jpg';
import img3 from '../images/posible3.jpg';
import '../css/Utility.css';

const Carrusel = () => (
    <Carousel>
    <Carousel.Item>
        <img
        className="d-block"
        src={img1}
        alt="First slide"
        />

            <div className="carousel-caption">
                <h3>Servicios ofrecidos por la comunidad y para la comunidad</h3>
                <p>Podrás encontrar aqui los servicios rebajados y voluntarios que ofrece la comunidad</p>
            </div>
        

    </Carousel.Item>
    <Carousel.Item>
        <img

        src={img2}
        alt="Third slide"
        />


            <div className="carousel-caption">
                <h3>Servicios Voluntarios y Rebajados</h3>
                <p>Hay mas de X servicios en todo el Pais que ya están siendo ofrecidos y llevamos un total de Y beneficiados</p>
            </div>
        

    </Carousel.Item>
    <Carousel.Item>
        <img

        src={img3}
        alt="Third slide"
        />


            <div className="carousel-caption">
                <h3>Acumula puntos de mérito y canjéalos</h3>
                <p>Los puntos de mérito se obtienen al brindar servicios voluntarios y/o rebajados, los que pueden ser cajeados por premios y otras ofertas!</p>
            </div>
        

    </Carousel.Item>
    </Carousel>
)
export default Carrusel;