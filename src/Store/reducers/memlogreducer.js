import * as actiontype from '../Actions/actiontypes'

const initialState={
    username:'',
    password:''
}

const reducer=(state=initialState,action)=>{
    
    switch(action.type){
    
    case(actiontype.STORING):{

        return {
            ...state,
            username:action.username,
            password:action.password
        }
    }
     
    default:
    return state;
    }
}

export default reducer;