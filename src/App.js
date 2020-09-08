import React from 'react';
import './App.css';
import MemLogin from './containers/Memberlogin/memberLogin'
import MemLogout from './containers/Memberlogin/memberLogout'
import Navbar from './components/Navbar/NAVBAR'
import { Switch, Route, Redirect } from 'react-router';
import Truek from './components/MemLogin/authtrue/trueauth';

function App() {
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

export default App;
