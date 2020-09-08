import React, { Component } from 'react'
import { Redirect } from 'react-router';
import * as actioncreator from '../../Store/Actions/memlogactions' 
import { connect } from 'react-redux';

class memlogout extends Component{
    componentDidMount(){
         this.props.onlogout()
    }
    render(){
        return(
            <Redirect to='/' />
        );
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onlogout:()=>dispatch(actioncreator.logout())
    }
}

export default connect(null,mapDispatchToProps)(memlogout)