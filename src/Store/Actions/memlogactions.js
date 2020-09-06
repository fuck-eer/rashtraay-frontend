//endpoint='https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]'

//APIKEY='AIzaSyCfUKoVzI6fKuAPwJqWqdXGa5GcHS4b0BY'


import * as actiontype from './actiontypes'
import Axios from 'axios'

export const authStart=()=>{
    // for spinner 
    return{
        type:actiontype.AUTHSTART,    
    }
}

export const authSuccess=(udata)=>{
    // 
    return{
        type:actiontype.AUTHSUCCESS,
        logdata:udata
    }
}

export const authFail=(err)=>{
    // 
    return{
        type:actiontype.AUTHFAIL,
       error:err
    }
}

export const storeData=(email,pass)=>{
    // console.log("creator logging",email,pass);
    return dispatch=>{
        dispatch(authStart());
        const authdata={
            email:email,
            password:pass,
            returnSecureToken:true
        }
        Axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCfUKoVzI6fKuAPwJqWqdXGa5GcHS4b0BY',authdata)
        .then(res=>{
            console.log(res.data)
            dispatch(authSuccess(res.data))})
        .catch(err=>{
            console.log(err);
            dispatch(authFail(err))})
    }
}

//'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCfUKoVzI6fKuAPwJqWqdXGa5GcHS4b0BY'