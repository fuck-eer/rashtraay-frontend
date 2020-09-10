import React from 'react'
import classes from './pdfcard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown,faFilePdf } from '@fortawesome/free-solid-svg-icons'

const logoutCon = <FontAwesomeIcon className={classes.icon} icon={faArrowCircleDown} />

const fileCon = <FontAwesomeIcon className={classes.icon} icon={faFilePdf} />

const pdfcard =(props)=>{
return(
    <div className={classes.card}>
        <div className={classes.cardheading}>
        <p>{fileCon}</p>
        <h4>title</h4>
        </div>
        <p className={classes.para}>add info</p>
        <div className={classes.cardfooter}>
        <h6>Date:</h6>
        <button>{logoutCon}</button>
        </div>

    </div>
)

}

export default pdfcard