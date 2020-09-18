import React from 'react'
import classes from './Modal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash } from '@fortawesome/free-solid-svg-icons'

const deletefileconcon = <FontAwesomeIcon icon={faTrash} />
// const signoutcon = <FontAwesomeIcon icon={faSignOutAlt} />
const Modal=(props)=>{

    return(
        <div className={classes.backdrop} onClick={props.clickk}>
<div className={classes.Modal}>
       <div className={classes.icon}><h5>{deletefileconcon}</h5></div>
    <div className={classes.info}><p>You really want to delete this file?</p></div>
   
   <div className={classes.buttons}>
    <button className={classes.bt1} onClick={props.readytodelete}>YES</button>
    <button className={classes.bt2} onClick={props.clickk}>NO</button>
    </div>

</div>
        </div>
    )
}

export default Modal