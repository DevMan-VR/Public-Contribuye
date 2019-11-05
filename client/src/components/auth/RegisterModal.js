import React, {Component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert,
    CustomInput
} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {register} from '../../actions/authActions';
import {clearErrors} from '../../actions/errorActions';
import '../../css/Utility.css';


class RegisterModal extends Component {

    state = {
        modal: false,
        name: '',
        password: '',
        email: '',
        phoneNumber: '',
        address: 'none',
        country: 'none',
        city: '',
        timezone: 'none',
        profileImgUrl: 'none',
        isContributor: false,
        experience: 0,
        company: 'none',
        registerDate: null,
        achievements: [{
            description: 'none',
            value: 0,
            iconUrl: 'none'

        }],
        serviceRequests: [{
            idUserOfferer: 'none',
            idUserRequester: 'none',
            titleServiceOffered: 'none',
            stateRequest: 'none'
        }],
        
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    toggle = () => {
        // Clear erros
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });

    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error){
            // Check for register error
            if(error.id === 'REGISTER_FAIL'){
                this.setState({msg: error.msg.msg});
            } else {
                this.setState({msg: null});
            }
        }

        // If Authenticated, close modal
        if(this.state.modal){
            if(isAuthenticated){
                this.toggle();

            }
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();

        const {name, email, password, phoneNumber, city,address,country,timezone,profileImgUrl,isContributor,achievements,serviceRequests,experience,company,registerDate} = this.state;

        // Create user object
        const newUser = {
            name,
            email,
            password,
            phoneNumber,
            city,
            address,
            country,
            timezone,
            profileImgUrl,
            isContributor,
            achievements,
            serviceRequests,
            experience,
            company,
            registerDate
        };

        console.log(newUser);

        // Attempt to register
        this.props.register(newUser);

        //Close modal
        //this.toggle();
    }

    render () {
        return (
            <div>
                
                <NavLink className="brandy" onClick={this.toggle} href="#">
                    Register
                </NavLink>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                  
                    <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="name">Nombre</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    className="mb-3"
                                    onChange={this.onChange}
                                
                                />

                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="mb-3"
                                    onChange={this.onChange}
                                
                                />

                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="mb-3"
                                    onChange={this.onChange}
                                
                                />
                                <Label for="phoneNumber">Teléfono Celular</Label>
                                <Input
                                    type="text"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    placeholder="telefono celular"
                                    className="mb-3"
                                    onChange={this.onChange}
                                
                                />
                                <Label for="city">Ciudad</Label>
                                <Input
                                    type="text"
                                    name="city"
                                    id="city"
                                    placeholder="Ciudad"
                                    className="mb-3"
                                    onChange={this.onChange}
                                
                                />
                                <Label for="name">¿Ofreces uno o mas Servicios?</Label>
                                <CustomInput type="checkbox" id="isContributor" label="Si" value="true" onClick={this.onChange} />
                                <CustomInput type="checkbox" id="isContributor" label="No" value="false" onClick={this.onChange} />

                                <Button
                                    color="dark"
                                    style={{marginTop:'2rem'}}
                                    block
                                
                                >
                                    Register
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
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, {register, clearErrors})(RegisterModal);