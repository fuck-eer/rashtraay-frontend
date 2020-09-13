import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Pdfcards from '../../../components/MemLogin/PDF/pdf cards/pdfCards';
import Uploader from '../../../components/MemLogin/PDF/pdfUploader/pdfupload';

class truek extends Component{

    render(){


        let auth=null
        if(this.props.token===null){
            auth=<Redirect to='/login'/>
        }
     return(
     
         <div>
         {auth}
             <Pdfcards/>
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