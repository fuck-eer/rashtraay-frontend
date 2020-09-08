import * as actiontype from '../Actions/actiontypes'

const initialState={
    
    token:null,
    userId:null,
    error:null,
    loading:false,
    page:false
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
                token:action.token,
                userId:action.userId,
                refreshToken:action.refreshToken,
                loading:false,
                page:true
            }
        }

        case(actiontype.LOGOUT):{
            return{
                ...state,
                token:null,
                userId:null,
                refreshToken:null,
                page:false
            }
        }
     
    default:
    return state;
    }
}

export default reducer;