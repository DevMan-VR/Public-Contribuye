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
        until: 'none',
        userid: ''
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
        console.log(this.props.auth);
        console.log(this.props.item.category);
        console.log(this.props.item.items.length);
        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className="navbar-text mr-3">
                        <strong style={{color: 'whitesmoke'}}>{user ? `Welcome ${user.name}` : ''}</strong>
                    </span>
                </NavItem>
                <NavItem>
                    <NavLink onClick={this.props.myServices} href={"/my-services/"} style={{color:'whitesmoke'}}>
                        Mis Servicios
                    </NavLink>
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
                    <div className="container">
                        <NavbarBrand className="brandy_man ml-3" href="/">Contribuye</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <ItemModal />
                                {isAuthenticated ? authLinks : guestLinks}
                                
                            </Nav>
                        </Collapse>

                    </div>
                </Navbar>

                
                    <Navbar expand="sm" className="underNavbar py-0">
                        <NavbarToggler onClick={this.toggle} style={{backgroundColor:'white'}}/>
                        <div className="container">
                        <Collapse className="justify-content-between ml-2" isOpen={this.state.isOpen} navbar>
                            
                            <NavLink href="/" className="brandy" >Inicio</NavLink>
                            <NavLink href="/services/health" className="health_item_nav" >Salud</NavLink>
                            <NavLink href="/services/law" className="law_item_nav">Leyes</NavLink>
                            <NavLink href="/services/tech" className="tech_item_nav" >Tecnologia</NavLink>
                            <NavLink href="/services/learning" className="learning_item_nav">Aprendizaje</NavLink>
                            <NavLink href="/services/events" className="events_item_nav">Eventos</NavLink>
                            <NavLink href="/services/local-market" className="local-market_item_nav">Negocios Locales</NavLink>
                            <NavLink href="/services/offers" className="offers_item_nav">Ofertas y Rebajas</NavLink>
                            <NavLink href="/services/others" className="others_item_nav">Otros</NavLink>

                            

                        </Collapse>
                        </div>
                        
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