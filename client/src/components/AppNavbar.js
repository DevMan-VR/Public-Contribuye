import React, {Component, Fragment} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../css/Utility.css';
import ItemModal from '../components/ItemModal';


class AppNavbar extends Component {
    state = {
        modal: false,
        title: 'none',
        category: this.props.item.category,
        subcategory: 'none',
        serviceType: 'none',
        p_method: 'none',
        p_amount: 0,
        location: 'none',
        until: 'none'
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    onChange = async e => {
        await this.setState({[e.target.name]: e.target.value })
        console.log(this.state);
    }
    onSubmit = e => {
        e.preventDefault();
        const newItem = {
            title: this.state.name,
            description: this.state.description,
            category: this.state.category,
            subcategory: this.state.subcategory,
            serviceType: this.state.serviceType,
            p_method: this.state.p_method,
            p_amount: this.state.p_amount,
            location: this.state.location,
            until: this.state.until
        }

        //Add item via addItem action
        this.props.addItem(newItem);

        //Close modal
        this.toggle();
    }
    render(){

        const {isAuthenticated, user} = this.props.auth;
        console.log("logsiño");
        console.log(this.props.item.category);
        console.log(this.props.item.items.length);
        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className="navbar-text mr-3">
                        <strong>{user ? `Welcome ${user.name}` : ''}</strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout />
                </NavItem>
            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                <NavItem>
                    <RegisterModal />
                </NavItem>
                <NavItem>
                     <LoginModal />
                </NavItem>
            </Fragment>
        );

        return (
            <div>
                <Navbar expand="sm" className={this.props.item.category ? this.props.item.category : 'contribuye'} >
                    <Container>
                        <NavbarBrand className="brandy" href="/">Contribuye</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <ItemModal />
                                {isAuthenticated ? authLinks : guestLinks}
                                
                            </Nav>
                        </Collapse>

                    </Container>
                </Navbar>
                <Navbar className="underNavbar py-0">
                    <NavLink href="/" className="brandy">Inicio</NavLink>
                    <NavLink href="/services/health" className="brandy">Salud</NavLink>
                    <NavLink href="/services/law" className="brandy">Leyes</NavLink>
                    <NavLink href="/services/tech" className="brandy">Tecnologia</NavLink>
                    <NavLink href="/services/learning" className="brandy">Aprendizaje</NavLink>
                    <NavLink href="/services/events" className="brandy">Eventos</NavLink>
                    <NavLink href="/services/local-market" className="brandy">Negocios Locales</NavLink>
                    <NavLink href="/services/offers" className="brandy">Ofertas y Rebajas</NavLink>
                    <NavLink href="/services/others" className="brandy">Otros</NavLink>

                </Navbar>
            </div>

        );
        
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    item: state.item
})

export default connect(mapStateToProps, null)(AppNavbar);