import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {connect} from 'react-redux';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar'
import Footer from './components/Footer'
import {Container} from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import {loadUser} from './actions/authActions';
import Services from './pages/Services';
import MyServiceRequests from './pages/MyServiceRequests';

import Home from './pages/Home';
import ItemView from './pages/ItemView';
import Home2 from './pages/Home2';
import MyServicesOffered from './pages/MyServicesOffered';


class App extends Component {

  componentWillMount(){
    store.dispatch(loadUser());
  }

  render(){
    return (
      <Fragment>
          <div className="container-fluid p-0" style={{minHeight: '100vh'}}>
          <Router>
            <Provider store={store}>
            <AppNavbar/>
            <Switch>
              
                
                <Route exact path="/" component={Home2}/> />
                  <Route exact path="/services/:category" component={Services} />
                  <Route exact path="/my-services/requested" component={MyServiceRequests} />
                  <Route exact path="/my-services/offered" component={MyServicesOffered} />
                  {/*<Route exact path="/services/:category/:id" component={ItemView}/>
                  {/*<Route exact path="/signup" component={Signup} />
                  <Route exact path="/herogrid" component={HeroGrid} />
                  <Route exact path="/heroes/:id" component={Producto} />
                  <Route exact path="/comics/:id" component={EditarProducto} />*/}

                </Switch>
                </Provider>
              
          </Router>
        </div> 
      <Footer/>
      </Fragment>
      
    );
  }
  
}


export default App;

  
        