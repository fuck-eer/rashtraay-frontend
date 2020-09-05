import * as actiontype from './actiontypes'

export const storeData=(uname,pass)=>{
    // console.log("creator logging",uname,pass);
    return{
        type:actiontype.STORING,
        username:uname,
        password:pass
    }
}

