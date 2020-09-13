import React from 'react'
import classes from './pdfcard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown,faFilePdf, faTrash } from '@fortawesome/free-solid-svg-icons'

const downloadCon = <FontAwesomeIcon className={classes.icon} icon={faArrowCircleDown} />
const delCon = <FontAwesomeIcon className={classes.icon} icon={faTrash} />
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
        <button onClick={props.clicked}>{delCon}</button>
        <h6 style={{color:'bisque'}}>{Math.round(props.size/1024)}Kb</h6>
        <a href={props.url} target='_blank' rel="noopener noreferrer"><button>{downloadCon}</button></a>
        </div>

    </div>
)

}

export default pdfcard