import React, {Component} from 'react';
import {Container} from 'reactstrap';
import ServiceRequestList from '../components/ServiceRequestList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {setCategory, getItemsFromUser} from '../actions/itemActions';
import {connect} from 'react-redux';
import store from '../store';

class MyServicesOffered extends Component {

    state = {
        myServices: [],
        loaded: false,
        serviceLoaded: false
    }

    async componentWillMount(){
        store.subscribe(async () => {
            console.log("Store State:")
            console.log(store.getState());
            if(store.getState().auth.user){
                if(!this.state.loaded){
                    console.log(store.getState().auth.user._id)
                    const id = store.getState().auth.user._id;
                    await this.setState({
                        loaded: true
                    })
                    console.log(this.state);
                    if(this.props.auth.user){
                        this.props.getItemsFromUser(id);
                        console.log(this.state);
                        await this.setState({
                            serviceLoaded: true
                        })
                    }
                    
                    
                }
                
            }
            

        });
    }
    async componentDidMount(){
        /*console.log("123await")
        const id = await this.props.auth.user._id;
        this.props.getItemsFromUser(id)
        console.log("didit");
        console.log(this.props);*/
    }
    loadServicesOffered(userid){
        
        console.log("macky");
        console.log(this.props);
    }
    render(){
    
        console.log(this.props);
        console.log("chiquillo");
        
        return(
            <Container style={{minHeight:"100px"}}>
                {
                    this.props.item.serviceOffered ? <ServiceRequestList list={this.props.item.serviceOffered} /> : null
                }

            </Container>
       )
    }

   
}

const mapStateToProps = state => ({
    item: state.item,
    auth: state.auth
});

export default connect(mapStateToProps, {setCategory, getItemsFromUser})(MyServicesOffered);