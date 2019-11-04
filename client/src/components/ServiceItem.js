import React, {Component, Fragment} from 'react';
import '../css/Utility.css'
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

class ServiceItem extends Component  {

    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });

    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = e => {
        e.preventDefault();
        const newItem = {
            name: this.state.name
        }

        //Add item via addItem action
        this.props.addItem(newItem);

        //Close modal
        this.toggle();
    }


    render(){
        console.log(this.props);
        return(
            <Fragment>
            <button className={"w-100 h-100 item-div "} onClick={this.toggle}>
            <div >
                <div>
                <h3 style={{textAlign:"left",paddingLeft:"3.7rem"}}>
                    Titulo
                </h3>
                </div>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-9">
                        <p style={{textAlign:"left",paddingLeft:"3rem"}}>Descripcion breve</p>
                    </div>
                    <div className="col-3">
                        <p style={{textAlign:"right", paddingRight:"1rem"}}>
                            Gratuito
                        </p>
                    </div>
                    </div>
                </div>
                
            
            </div>
    
            </button>

            
                <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            >

            <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="item">Item</Label>
                        <Input
                            type="text"
                            name="name"
                            id="item"
                            placeholder="Add shopping item"
                            onChange={this.onChange}
                        
                        />
                        <Button
                            color="dark"
                            style={{marginTop:'2rem'}}
                            block
                        
                        >
                            Add Item
                        </Button>
                    </FormGroup>
                </Form>
            </ModalBody>


            </Modal>
            </Fragment>
            
            
        )
    }
}

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {addItem})(ServiceItem);