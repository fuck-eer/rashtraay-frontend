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

export const authSuccess=(token,userid,reftoken)=>{
    // 
    return{
        type:actiontype.AUTHSUCCESS,
        token:token,
        userId:userid,
        refreshToken:reftoken
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
        Axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key= AIzaSyAO9NeKDFs0V7BJYoOT2G1FwAzBzNc8nq0',authdata)
        .then(response=>{
            // console.log(response.data)
            const expttime=new Date(new Date().getTime()+response.data.expiresIn*1000)
            localStorage.setItem('token',response.data.idToken)
            localStorage.setItem('userId',response.data.localId)
            localStorage.setItem('exptime',expttime)
            localStorage.setItem('refreshToken',response.data.refreshToken)
            dispatch(authSuccess(response.data.idToken, response.data.localId,response.data.refreshToken))
            dispatch(exceedTime(response.data.expiresIn))

        })
        .catch(err=>{
            // console.log(err);
            dispatch(authFail(err.response.data.error))
        })
    }
}

export const logout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('exptime')

    return{
        type:actiontype.LOGOUT
    }
}

export const exceedTime=(expt)=>{
    // 
    return dispatch=>{
        setTimeout(()=>
        {dispatch(logout())} 
            ,expt*1000)
    }
}


export const autoLogin=()=>{
    return dispatch=>{
        const token=localStorage.getItem('token');
        if(!token){
            dispatch(logout())
        }
        else{
            const expirationTime=new Date(localStorage.getItem('exptime'))
            if(expirationTime>new Date()){
                const userId=localStorage.getItem('userId');
                const refreshToken=localStorage.getItem('refreshToken');
               dispatch(authSuccess(token,userId,refreshToken))
               dispatch(exceedTime((expirationTime.getTime()-new Date().getTime())/1000))
            }
            else{
                dispatch(logout())
            }

        }
    }
}

export const fileupload=()=>{
    
    return{
        type:actiontype.FILEUPLOAD   
    }
}

export const fileuploaddone=()=>{
   
    return{
        type:actiontype.FILEUPLOADDONE   
    }
}



//'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key= AIzaSyAO9NeKDFs0V7BJYoOT2G1FwAzBzNc8nq0'