import React, { Component } from 'react';
import './App.css';
import MemLogin from './containers/Memberlogin/memberLogin'
import MemLogout from './containers/Memberlogin/memberLogout'
import Navbar from './components/Navbar/NAVBAR'
import { Switch, Route, Redirect, withRouter } from 'react-router';
import Truek from './containers/Memberlogin/authtrue/trueauth';
import * as actioncreator from './Store/Actions/memlogactions'
import { connect } from 'react-redux';

class App extends Component {
  
  componentDidMount(){
    this.props.onAutoLogin();
  }
  
  render(){


    return (
     <div>
     <Navbar/>
  
     <Switch>
  <Route path='/login' exact component={MemLogin}/>
  <Route path='/Data' exact component={Truek}/>
  <Route path='/logout' exact component={MemLogout}/>
  <Redirect from='/' to='/login'/>
  
     </Switch>
     </div>
    );
  }
}

const mapDispatchToProps=dispatch=>{
return{
  onAutoLogin:()=>dispatch(actioncreator.autoLogin())
}
}

export default withRouter(connect(null,mapDispatchToProps)(App));
