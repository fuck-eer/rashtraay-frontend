import * as actiontype from '../Actions/actiontypes'

const initialState={
    email:'',
    password:'',
    token:null,
    userId:null,
    error:null,
    loading:false,
}

const reducer=(state=initialState,action)=>{
    
    switch(action.type){

        case(actiontype.AUTHSTART):{
            return{
                ...state,
                error:null,
                loading:true
            }
        }

        case(actiontype.AUTHFAIL):{
            return{
                ...state,
                error:action.error,
                loading:false
            }
        }

        case(actiontype.AUTHSUCCESS):{
            return{
                ...state,
                token:action.logdata.idToken,
                userId:action.logdata.localId,
                refreshToken:action.logdata.refreshToken,
                loading:false
            }
        }
     
    default:
    return state;
    }
}

export default reducer;