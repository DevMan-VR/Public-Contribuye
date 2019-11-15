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
        title: '',
        description: '',
        category: '',
        subcategory: 'none',
        service_type: 'none',
        p_method: 'none',
        p_amount: 0,
        location: 'none',
        contact_phone: '',
        contact_mail: '',
        serviceRequests: [{
            idUserRequester: "none",
            idUserOfferer: "none",
            titleServiceOffered: "none",
            serviceId: "none",
            stateRequest: "none",
            title: "none",
            description: "none"
        }],
        userFather: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });

    }

    onChange = async (e) => {
        await this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }

    onSubmit = e => {
        e.preventDefault();
        const newItem = {
            title: this.state.title,
            description: this.state.description,
            category: this.props.item.category,
            subcategory: this.state.subcategory,
            service_type: this.state.service_type,
            p_method: this.state.p_method,
            p_amount: this.state.p_amount,
            location: this.state.location,
            until: this.state.until,
            contact_phone: this.state.contact_phone,
            contact_mail: this.state.contact_mail,
            userFather: (this.props.auth.user._id || this.props.auth.user.id),
            serviceRequests: this.state.serviceRequests
        }

        //Add item via addItem action
        this.props.addItem(newItem);
        console.log(newItem);
        //Close modal
        this.toggle();
    }

    render () {
        //console.asdasdlog(this.props.item.category);
        return (
            <div>

                {this.props.auth.isAuthenticated && this.props.item.category ? 
                    <Button
                        color="dark"
                        onClick={this.toggle}
                    >Agregar Servicio</Button>    
                :
                    null
                }

                

<Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            >

            <ModalHeader toggle={this.toggle}>Agregar un nuevo Servicio</ModalHeader>
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

                        <legend>Número de contacto</legend>
                        <Input
                            type="text"
                            name="contact_phone"
                            id="contact_phone"
                            placeholder="Ingresa tu numero de contacto"
                            onChange={this.onChange}
                        
                        />

                        <legend>Mail de contacto</legend>
                        <Input
                            type="text"
                            name="contact_mail"
                            id="contact_mail"
                            placeholder="Ingresa tu correo de contacto"
                            onChange={this.onChange}
                        
                        />

                        <FormGroup tag="service_type">
                            <legend>Tipo de Servicio</legend>
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="service_type" value="free" id="service_type" onChange={this.onChange} />{' '}
                                Voluntario
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="service_type" value="offer" id="service_type" onChange={this.onChange} />{' '}
                                Rebajado
                            </Label>
                            </FormGroup>
                        </FormGroup>
                    {
                        this.state.service_type === 'offer' ? 
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
    auth: state.auth
});

export default connect(mapStateToProps, {addItem})(ItemModal);