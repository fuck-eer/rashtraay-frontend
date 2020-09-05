import classes from './memberLogin.module.css'
import React, { Component } from 'react'
// import {storeData} from '../../Store/Actions/memlogactions'
// import { connect } from 'react-redux'

class memberLogin extends Component{

  state={
    uname:'',
    pass:'',
    Auth:false 
  }

  changingu=(event)=>{
this.setState({uname:event.target.value})
  }

  changingp=(event)=>{
    this.setState({pass:event.target.value})
      }

      clicked=(event)=>{
        event.preventDefault()
        console.log('on click',this.state.uname,this.state.pass)
//post the username and password to the server here and accept the returning value and set state(Auth) with it!!!

// ------------------------------redux logic-------------------------------------
  // this.props.storelogdata(this.state.uname,this.state.pass)
  // ------------------------------redux logic-------------------------------------

      }

    render(){
        return(
            <div className={classes.back}>
            <h2>LOGIN</h2>
              <form>
                <div className={classes.inputbox}>
                  <input type='text' name='username' onChange={(event)=>this.changingu(event)} value={this.state.uname} required/>
                  <label>username</label>
                </div>  
                <div className={classes.inputbox}>  
                  <input type='password' name='password' onChange={(event)=>this.changingp(event)} value={this.state.pass} required/>
                  <label>password</label>
                </div>  
                <button onClick={this.clicked}>Submit</button>
              </form>

              

            </div>
        )
    }
}

// ------------------------------redux logic-------------------------------------
// const mapDispatchToProps=dispatch=>{
//   return{
//     storelogdata:(uname,pass)=>dispatch(storeData(uname,pass))
  
//   }
//   }

// export default connect(null,mapDispatchToProps)(memberLogin)
// ------------------------------redux logic-------------------------------------

export default memberLogin
