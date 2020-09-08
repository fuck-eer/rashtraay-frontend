import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const truek=(props)=>{

   let auth=null
   if(props.token===null){
       auth=<Redirect to='/login'/>
   }
return(

    <div>
    {auth}
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
    </div>
);

}

const mapStateToProps=state=>{
return{
    token:state.memlog.token
}
}

export default connect(mapStateToProps)(truek)