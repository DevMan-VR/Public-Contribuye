import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems, deleteItem} from '../actions/itemActions';
import PropTypes from 'prop-types';
import ServiceRequestItem from './ServiceRequestItem';


class ServiceRequestList extends Component {



    render(){
        const {list} = this.props.list;
        console.log("Logsiñopepe");
        console.log(this.props);
        return(
            <Container className="mt-5">

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        
                            {this.props.list.map( (listItem) => (
                                <CSSTransition key={listItem._id} timeout={500} classNames="fade">
                                    <ListGroupItem className="ml-0 border-0 p-0">
                                        {/**{this.props.isAuthenticated ? 
                                        
                                            <Button 
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={this.onDeleteClick.bind(this, _id)}
                                            >
                                                &times;
                                            </Button>
                                            

                                            : null

                                        }
                                    {name}*/}
                                    {listItem.title==="none" ? null : <ServiceRequestItem elem={listItem} request={true}/>}

                                    

                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                   
                        
                    </TransitionGroup>
                    
                </ListGroup>
            </Container>
        );
    }
}









const mapStateToProps = (state) => ({
    item: state.item,
    auth: state.auth
})

export default connect(mapStateToProps, null) (ServiceRequestList);