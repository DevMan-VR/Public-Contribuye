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

class ServiceItem extends Component  {

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
  

    submitRequest = (e) => {
        e.preventDefault();
        const newServiceRequest = {
            userRequesterId: this.props.auth.user._id,
            userOffererId: this.props.elem.userFather,
            serviceId: this.props.elem._id,
            stateRequest: "requesting"

        }
        console.log(newServiceRequest);
        this.props.addServiceRequest(newServiceRequest);
        console.log("despachando nueva request de servicio");


        this.toggle();
    }


    render(){
        console.log("sadasdsamuu");
        console.log(this.props.elem);
        var min = 2;
        var max = 5;
        var randFloat = min + (Math.random() * (max-min)) 
        var roundedFloat = Math.round( randFloat * 10 ) / 10;
        var randInt =  Math.floor(randFloat);
        var times = [1,2,3,4,5];
        console.log(this);
        return(
            <Fragment>
            <button className={"w-100 item-div "+this.props.elem.category+"_item"} style={{height:'19em'}} onClick={this.toggle}>
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
                                                    {this.props.elem.contact_phone}<br></br>
                                                    {this.props.elem.contact_mail}

                                                </p>
                                         </div>
                                                    
                                </div>

                                <div className="col-12">
                                    <p>
                                        <h4>Precio</h4>
                                        {this.props.elem.p_amount}<br></br>
                                            
                                                
                               
                                            
                                        {/*<br></br>{this.props.elem.service_type === "offer" ?  this.props.elem.p_amount : null}*/}

                                        {/*this.state.elem.location*/} <br></br>
                                    </p>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-md-12 col-sm-12  mb-3 ">
                                    
                                    <div className="d-flex justify-content-end">
                                        {times.map( (number) =>  {
                                                    if(number <= randInt) return <img className="star-icon" src={star}></img>
                                                    return null
                                        })}
                                    </div>
                                    <div className="d-flex justify-content-end mr-2">
                                        {roundedFloat}
                                    </div>
                                            
 

                                </div>
                            </div>
                            {
                                this.props.auth.isAuthenticated ? 
                                    <button className="w-100" onClick={this.submitRequest}>
                                    <h4>Solicitar</h4>
                                    </button>
                                :
                                    <p>Para solicitar el Servicio Registrate o Inicia Sesión...</p>
                            }
                            
                            
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

export default connect(mapStateToProps, {addItem,addServiceRequest})(ServiceItem);