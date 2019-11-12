import React, {Component} from 'react';
import {Container} from 'reactstrap';
import ServiceRequestList from '../components/ServiceRequestList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {setCategory, getItemsFromUser} from '../actions/itemActions';
import {connect} from 'react-redux';

class MyServices extends Component {
   componentWillMount(){
       console.log("Probando123");
       const {category} = this.props.match.params;
       console.log(category);
       this.props.setCategory(category);
       
       //this.state.setCategory(category);

       const renderer = async () => {
            if(this.props.auth.user.isContributor){
                console.log(this.props)
            } else {
                const serviceRequests = this.props.auth.user.serviceRequests;
                console.log(serviceRequests);
            }
       }

           
       
   }
   componentDidMount(){
    {
        this.props.auth.user ? 
            (this.props.auth.user.isContributor ? this.props.getItemsFromUser(this.props.auth.user._id) : console.log("isNOT-Contributor-MyServices"))
        :
            console.log("error on something")
        
        /*(this.props.auth.user ? console.log(this.props.getItemsFromUser(this.props.auth.user._id)) : console.log(this.props.auth))*/
    }
   }

    render(){
        
        //this.props.getItemsFromUser(this.props.auth.user._id || this.props.auth.user.id);


        
        return(
            <Container style={{minHeight:"100px"}}>
                {/*<ServiceRequestList />*/}
                <p>Testing</p>
            </Container>
       )
    }

   
}

const mapStateToProps = state => ({
    item: state.item,
    auth: state.auth
});

export default connect(mapStateToProps, {setCategory, getItemsFromUser})(MyServices);