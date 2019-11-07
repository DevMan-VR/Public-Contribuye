import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems, deleteItem} from '../actions/itemActions';
import PropTypes from 'prop-types';
import ServiceItem from './ServiceItem';

const colors = {
    
}

class ServiceList extends Component {

    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount(){
        this.props.getItems(this.props.item.category);
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render(){
        const {items} = this.props.item;
        return(
            <Container className="mt-3">

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map( (item) => (
                            <CSSTransition key={item._id} timeout={500} classNames="fade">
                                <ListGroupItem className="ml-0 p-1 border-0">
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

                                <ServiceItem elem={item}/>

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
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { getItems, deleteItem}) (ServiceList);