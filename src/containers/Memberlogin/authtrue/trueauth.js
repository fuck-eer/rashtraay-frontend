import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Pdfcard from '../../../components/MemLogin/PDF/pdf cards/pdfcard';
import Uploader from '../../../components/MemLogin/PDF/pdfUploader/pdfupload';

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
             <Pdfcard/>
             <Pdfcard/>
             <Pdfcard/>
             <Pdfcard/>
             <Pdfcard/>
             <Pdfcard/>
             <Pdfcard/>
             <Pdfcard/>
             <Uploader/>
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