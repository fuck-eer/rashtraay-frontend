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
        <h4>{props.tit}</h4>
        </div>
        <p className={classes.para}>{props.type}</p>
        <div className={classes.cardfooter}>
        <h6>Size:{props.size}</h6>
        <a href={props.url} target='_blank'><button>{logoutCon}</button></a>
        </div>

    </div>
)

}

export default pdfcard