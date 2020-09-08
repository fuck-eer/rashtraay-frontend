import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { connect } from 'react-redux'


const navbar=(props)=>{
    return(
<header>
    <nav>
        <ul>
            {props.isAuth?<NavLink to='/Data' exact>DATA</NavLink>:null}
            {props.isAuth?<NavLink to='/logout' exact>LOGOUT</NavLink>:<NavLink to='/login' exact >Login</NavLink>}

            
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