import classes from './memberLogin.module.css'
import React, { Component } from 'react'
// import { Route} from 'react-router'
// import Trueauth from '../../components/MemLogin/authtrue/trueauth'
import {storeData} from '../../Store/Actions/memlogactions'
import { connect } from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner'
import { Redirect } from 'react-router'


class memberLogin extends Component{

  state={
    email:'',
    pass:'',
    Auth:false 
  }



  changingu=(event)=>{
this.setState({email:event.target.value})
  }

  changingp=(event)=>{
    this.setState({pass:event.target.value})
      }

      clicked=(event)=>{
        event.preventDefault()
        this.setState({Auth:true})
        console.log('on click',this.state.email,this.state.pass)
//post the email and password to the server here and accept the returning value and set state(Auth) with it!!!



// ------------------------------redux logic-------------------------------------
  this.props.storelogdata(this.state.email,this.state.pass)
  // ------------------------------redux logic-------------------------------------

      }

    render(){
      
      let errormsg=null;

if(this.props.error){
  errormsg=(<p style={{color:'#ff5050',fontSize:'10px',textAlign:'center'}}>{this.props.error.message}</p>)
}
        // console.log(this.state.Auth);
        let form=(
          <div className={classes.back}>
          <h2>LOGIN</h2>
          {errormsg}
            <form>
              <div className={classes.inputbox}>
                <input type='email' name='email' onChange={(event)=>this.changingu(event)} value={this.state.email} required/>
                <label>Email</label>
              </div>  
              <div className={classes.inputbox}>  
                <input type='password' name='password' onChange={(event)=>this.changingp(event)} value={this.state.pass} required/>
                <label>password</label>
              </div>  
              <button onClick={this.clicked}>Submit</button>
            </form>
          </div>
        )

if(this.props.loading){
  form=<Spinner/>;
}

let auth=null
if(this.props.token){
  auth=<Redirect to='/Data' />
}


        return(
       
          <div>
          {auth}
          {form}
          </div>
          

            // <div className={classes.back}>
            // <h2>LOGIN</h2>
            //   <form>
            //     <div className={classes.inputbox}>
            //       <input type='email' name='email' onChange={(event)=>this.changingu(event)} value={this.state.email} required/>
            //       <label>Email</label>
            //     </div>  
            //     <div className={classes.inputbox}>  
            //       <input type='password' name='password' onChange={(event)=>this.changingp(event)} value={this.state.pass} required/>
            //       <label>password</label>
            //     </div>  
            //     <button onClick={this.clicked}>Submit</button>
            //   </form>
            // </div>
        )
    }
}

// ------------------------------redux logic-------------------------------------
const mapStateToProps=state=>{
  return{
    token:state.memlog.token,
  loading:state.memlog.loading,
  error:state.memlog.error,
  
  }
  }

const mapDispatchToProps=dispatch=>{
  return{
    storelogdata:(email,pass)=>dispatch(storeData(email,pass))
  
  }
  }

export default connect(mapStateToProps,mapDispatchToProps)(memberLogin)
// ------------------------------redux logic-------------------------------------

// export default memberLogin
