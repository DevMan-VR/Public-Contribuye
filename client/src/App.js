import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar'
import {Container} from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import {loadUser} from './actions/authActions';

import Home from './pages/Home';



class App extends Component {

  componentDidMount(){
    store.dispatch(loadUser());
  }

  render(){
    return (
      <div className="container-fluid p-0">
        <Router>
          <Provider store={store}>
            <AppNavbar />
              <Switch>
              <Route exact path="/" component={Home}/> />
                <Route exact path="/service" component={Home} />
                {/*<Route exact path="/signup" component={Signup} />
                <Route exact path="/herogrid" component={HeroGrid} />
                <Route exact path="/heroes/:id" component={Producto} />
                <Route exact path="/comics/:id" component={EditarProducto} />*/}

              </Switch>
              </Provider>
        </Router>
      </div> 
    );
  }
  
}

export default App;

  
        