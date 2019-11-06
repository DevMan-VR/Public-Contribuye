import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getSingleItem} from '../actions/itemActions';

class ItemView extends Component{

    static propTypes = {
        getSingleItem: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired
    };

    componentDidMount(){
        this.props.getSingleItem(this.props.match.params.category,this.props.match.params.id);
        console.log(this);
    }
    
    render(){
        const {items} = this.props.item;
        return(
            <div>
                hello {items._id}
            </div>
        )
    }
}   
const mapStateToProps = (state) => ({
    item: state.item,
})

export default connect(mapStateToProps, { getSingleItem}) (ItemView);