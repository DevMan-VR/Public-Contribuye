import React, {Component} from 'react';
import {Container} from 'reactstrap';
import ServiceRequestList from '../components/ServiceRequestList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {setCategory, getItemsFromUser, setItemsLoading} from '../actions/itemActions';
import {connect} from 'react-redux';

class MyServiceRequests extends Component {

    state = {
        user: null,
    }


    render(){
    

        console.log(this.props);

        
        return(
            <Container style={{minHeight:"100px"}}>
                {/*<ServiceRequestList />*/}

                {
                    this.props.auth.user ? <ServiceRequestList list={this.props.auth.user.serviceRequests} /> : null
                }

            </Container>
       )
    }

   
}

const mapStateToProps = state => ({
    item: state.item,
    auth: state.auth
});

export default connect(mapStateToProps, {setCategory, getItemsFromUser})(MyServiceRequests);