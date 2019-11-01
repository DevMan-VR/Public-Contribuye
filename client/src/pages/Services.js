import React, {Component} from 'react';
import {Container} from 'reactstrap';
import ItemModal from '../components/ItemModal';
import ServiceList from '../components/ServiceList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {setCategory} from '../actions/itemActions';
import {connect} from 'react-redux';

class Services extends Component {
   componentDidMount(){
       console.log("Probando123");
       
       const {category} = this.props.match.params;
       console.log(category);
       this.props.setCategory(category);
       //this.state.setCategory(category);
   }
    render(){
        return(
            <Container>
                <ItemModal />
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