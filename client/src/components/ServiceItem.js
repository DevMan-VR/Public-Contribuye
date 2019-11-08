import React, {Component, Fragment} from 'react';
import '../css/Utility.css'
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions';
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
    componentDidMount(){
        

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
            service_type: this.state.service_type,
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
        var min = 2;
        var max = 5;
        var randFloat = min + (Math.random() * (max-min)) 
        var roundedFloat = Math.round( randFloat * 10 ) / 10;
        var randInt =  Math.floor(randFloat);
        var times = [1,2,3,4,5];
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
                        <div className="col-8">
                            <p style={{textAlign:"left",paddingLeft:"3rem"}}></p>
                        </div>
                        <div className="col-4">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <p style={{textAlign:"right", paddingRight:"1rem"}}>
                                            {this.props.elem.service_type}
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                    </div>
                                </div>
                            </div>
                        
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