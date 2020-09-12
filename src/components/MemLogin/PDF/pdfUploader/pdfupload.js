import React, { Component } from 'react'
import classes from './pdfupload.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { storage } from '../../../../Firebase/firebase'

const uploadCon = <FontAwesomeIcon className={classes.icon} icon={faCloudUploadAlt} /> 
const checkCon = <FontAwesomeIcon className={classes.icon} icon={faCheckCircle} /> 


class uploader extends Component{
    state={
        check:false,
        file:null,
        progress:0
    }
    
    handleChange=(e)=>{
        if(e.target.files[0]){
            this.setState({check:true,file:e.target.files[0],progress:0})
        }
    }

    firebaseUpload=()=>{
        const uploadtask=storage.ref(`SCRIPTS/${this.state.file.name}`).put(this.state.file)
        console.log(uploadtask);
        uploadtask.on(
            'state_changed',
            snapshot=>{
this.setState({progress:Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100)})
            },
            error=>{
console.log(error);
            },
            ()=>{
storage
.ref('SCRIPTS')
.child(this.state.file.name)
.getDownloadURL()
.then(res=>{
this.setState({file:null,check:false})
    console.log(res)})
.catch(err=>console.log(err))
            }
        )

    }

    render(){
        console.log(this.state.file);
let checklist=null
if(this.state.file){
 checklist=(<div className={classes.popup}>
    {this.state.progress?<progress value={this.state.progress} max='100'/>:null}
    <p>{this.state.file.name}</p>

 </div>)
}


        return(
            <div>
            {checklist}
            <div className={classes.upfoot}>  
          {!this.state.check?<label title='Upload a File' htmlFor="files">{uploadCon}</label>:<button title='Done!' onClick={this.firebaseUpload}>{checkCon}</button>}
          <input id="files" style={{display:'none'}} type="file" onChange={this.handleChange}></input>
          {/* <button>{checkCon}</button> */}
            </div>
            </div>

        )
    }


}

export default uploader