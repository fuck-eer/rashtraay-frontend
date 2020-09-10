import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Pdfcard from '../../../components/MemLogin/PDF/pdf cards/pdfcard';

class truek extends Component{

    render(){

let style={
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
}
        let auth=null
        if(this.props.token===null){
            auth=<Redirect to='/login'/>
        }
     return(
     
         <div style={style}>
         {auth}
             <Pdfcard/>
             <Pdfcard/>
             <Pdfcard/>
             <Pdfcard/>
             <Pdfcard/>
             <Pdfcard/>

         </div>
     );
    }

}

const mapStateToProps=state=>{
return{
    token:state.memlog.token
}
}

export default connect(mapStateToProps)(truek)