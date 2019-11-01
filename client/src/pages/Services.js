import React, {useEffect} from 'react';
import {Container} from 'reactstrap';
import ItemModal from '../components/ItemModal';
import ServiceList from '../components/ServiceList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {setCategory} from '../actions/itemActions';

function Services(props) {
   
    useEffect( () =>{
        console.log(props.match.params.category);
        setCategory(props.match.params.category);
    },[])

   return(
        <Container>
            <ItemModal />
            <ServiceList />
        </Container>
   )
}


export default Services;
