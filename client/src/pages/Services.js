import React, {Fragment} from 'react';
import {Container} from 'reactstrap';
import ItemModal from '../components/ItemModal';
import ServiceList from '../components/ServiceList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const Services = () => (
    <Container>
        <ItemModal/>
        <ServiceList/>
    </Container>
            
)


export default Services;
