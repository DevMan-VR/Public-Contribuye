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
        title: 'none',
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
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

    submitRequest = () => {
        console.log("despachando nueva request de servicio")
        this.toggle();
    }


    render(){
        console.log(this);
        return(
            <Fragment>
            <button className={"w-100 h-100 "+this.props.elem.category+" item-div"} onClick={this.toggle}>
            <div >
                <div>
                <h3 style={{textAlign:"left",paddingLeft:"3.7rem"}}>
                    {this.props.elem.title}
                </h3>
                </div>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-9">
                        <p style={{textAlign:"left",paddingLeft:"3rem"}}>{this.props.elem.description}</p>
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

            <ModalHeader toggle={this.toggle}>{this.props.elem.title}</ModalHeader>
            <ModalBody>
                
                        <div className="container-fluid">
                            <div className="row">

                                <div className="col-8">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <p>{this.props.elem.title}</p>
                                        </div>
                                        <div className="row">
                                            <p>{this.props.elem.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <p>
                                        {this.props.elem.serviceType} 
                                        <br></br>{this.props.elem.serviceType === "offer" ?  this.props.elem.p_method : null}
                                        {/*this.state.elem.location*/} <br></br>
                                    </p>
                                </div>

                            </div>

                            <button className="w-100" onClick={this.submitRequest}>
                                <h4>Solicitar</h4>

                            </button>
                            
                        </div>
            </ModalBody>


            </Modal>
             {/**
                title: String
                description: String
                category: String
                subcategory: String
                serviceType: String
                p_method:String
                p_amount: String
                location: String
                until: String
            */}
            </Fragment>

           
            
        )
    }
}

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {addItem})(ServiceItem);