import * as actiontype from '../Actions/actiontypes'

const initialState={
    email:'',
    password:''
}

const reducer=(state=initialState,action)=>{
    
    switch(action.type){
    
    case(actiontype.STORING):{
console.log('storing data');
        return {
            ...state,
            email:action.email,
            password:action.password
        }
    }
     
    default:
    return state;
    }
}

export default reducer;