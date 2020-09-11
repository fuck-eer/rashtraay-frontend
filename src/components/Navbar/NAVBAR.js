import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

const logoutCon = <FontAwesomeIcon style={{textAlign:'center',color:'#f81f34',fontSize:'22px'}} icon={faPowerOff} />

const navbar=(props)=>{
    return(
<header>
    <nav>
        <ul>
            {props.isAuth?<NavLink to='/Data' exact>DATA</NavLink>:null}
            {props.isAuth?<NavLink title='Logout' to='/logout' exact>{logoutCon}</NavLink>:<NavLink to='/login' exact >Login</NavLink>}

            
        </ul>
    </nav>
</header>
    )
}

const mapStateToProps=(state)=>{
return{
isAuth:state.memlog.token
}
}

export default connect(mapStateToProps)(navbar)