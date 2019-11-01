import React from 'react';
import {Carousel} from 'react-bootstrap';


const Carrusel = () => (
    <Carousel>
    <Carousel.Item>
        <img
        className="d-block"
        src="https://via.placeholder.com/1200x500"
        alt="First slide"
        />
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img

        src="https://via.placeholder.com/1200x500"
        alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img

        src="https://via.placeholder.com/1200x500"
        alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
)
export default Carrusel;