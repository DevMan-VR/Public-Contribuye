import React, {Component} from 'react';
import {Container} from 'reactstrap';
import ServiceList from '../components/ServiceList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {setCategory} from '../actions/itemActions';
import {connect} from 'react-redux';

class Services extends Component {
   componentWillMount(){
       console.log("Probando123");
       const {category} = this.props.match.params;
       console.log(category);
       this.props.setCategory(category);
       
       //this.state.setCategory(category);
   }
    render(){
        
        return(
            <Container style={{minHeight:"100px"}}>
                <ServiceList />
            </Container>
       )
    }

   
}

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {setCategory})(Services);