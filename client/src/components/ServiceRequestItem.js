import React, {Component, Fragment} from 'react';
import '../css/Utility.css'
import {connect} from 'react-redux';
import {addItem,addServiceRequest} from '../actions/itemActions';
import star from '../images/star.png'
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

class ServiceRequestItem extends Component  {

    state = {
        modal: false,
        title: 'none',
        randInt: 0,
        times: 0
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
  



    render(){
        console.log(this);
        console.log("log");
        console.log(this.props);
        
        return(
            <Fragment>
            <button className={"w-100 item-div "} style={{height:'19em'}} onClick={this.toggle}>
            <div >
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <h3  style={{textAlign:"left",paddingLeft:"3.7rem"}}>
                            {this.props.elem.title}
                        </h3>
                    </div>

                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <p style={{textAlign:"left",paddingLeft:"3rem", paddingRight:"3rem"}}>{(this.props.elem.description).substring(0,100)+"..."}</p>
                        </div>
                        <div className="col-md-3 col-sm-12">

                                        <p style={{textAlign:"right"}}>
                                            {this.props.elem.service_type}
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
                
                        <div className="container-fluid" >
                            <div className="row">

                                <div className="col-12">
                                        <div>
                                            
                                                <p>
                                                    <h4>Descripción</h4>
                                                    {this.props.elem.description}
                                                    <h4 className="mt-4">Información de contacto</h4>
                                                    {this.props.elem.contact_phone}
                                                    {this.props.elem.contact_mail}

                                                    {/*this.props.request ? "numero de solicitantes: "+(this.props.elem.serviceRequest).length :null*/}

                                                </p>
                                         </div>
                                                    
                                </div>

                                <div className="col-12">
                                    <p>
                                        <h4>Precio</h4>

                                            
                                                
                               {this.props.elem.service_type === "offer" ?  this.props.elem.p_amount : "Gratis"}

                                    </p>
                                </div>

                            </div>
                            
                            
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
    auth: state.auth
});

export default connect(mapStateToProps, null)(ServiceRequestItem);