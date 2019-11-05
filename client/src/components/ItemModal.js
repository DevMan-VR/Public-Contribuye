import React, {Component, Fragment} from 'react';
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
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions';
import PropTypes from 'prop-types';

class ItemModal extends Component {

    state = {
        modal: false,
        name: ''
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
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

    render () {
        return (
            <div>

                {this.props.isAuthenticated ? 
                    <Button
                        color="dark"
                        style={{marginBottom: '2rem'}}
                        onClick={this.toggle}
                    >Contribuye</Button>    
                :
                    null
                }

                

<Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            >

            <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <legend>Titulo de Servicio</legend>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Titulo del servicio"
                            onChange={this.onChange}
                        
                        />
                        <legend>Descripción de Servicio</legend>
                        
                        <Input
                            type="textarea"
                            name="description"
                            id="description"
                            placeholder="Descripcion de servicio"
                            onChange={this.onChange}
                        
                        />

                        <FormGroup tag="serviceType">
                            <legend>Tipo de Servicio</legend>
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="serviceType" value="free" id="serviceType" onChange={this.onChange} />{' '}
                                Voluntario
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="serviceType" value="offer" id="serviceType" onChange={this.onChange} />{' '}
                                Rebajado
                            </Label>
                            </FormGroup>
                        </FormGroup>
                    {
                        this.state.serviceType === 'offer' ? 
                        <Fragment>
                        <FormGroup tag="p_method">
                            <legend>Tipo de Pago</legend>
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="p_method" id="p_method" onChange={this.onChange} />{' '}
                                Débito
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="p_method" id="p_method" onChange={this.onChange}/>{' '}
                                Efectivo
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="p_method" id="p_method" onChange={this.onChange}/>{' '}
                                Transferencia
                            </Label>
                            </FormGroup>
                        </FormGroup>

                        <legend>Precio de Servicio</legend>
                        <Input
                            type="number"
                            name="p_amount"
                            id="p_amount"
                            placeholder="Ingresa el precio del servicio"
                            onChange={this.onChange}
                        
                        />
                        </Fragment>

                        :

                        <Fragment></Fragment>
                    }
                        


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
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {addItem})(ItemModal);