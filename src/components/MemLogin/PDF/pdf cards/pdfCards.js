import { scriptsRef, storageRef } from '../../../../Firebase/firebase'
import React, { Component } from 'react'
import Pdfcard from './pdfCard/pdfcard'
import Spinner from '../../../UI/Spinner/Spinner'
import { connect } from 'react-redux'
import { fileuploaddone } from '../../../../Store/Actions/memlogactions'

class Pdfcards extends Component{
_isMounted=false
state={
    pdfData:[],
   
    // ************************************
    // urll:[],
    // naame:[],
    // type:[],
    // size:[],
    // ************************************

}

refresh=()=>{
    this.setState({pdfData:[]})
this.settingup()
}

settingup=()=>{
    

    scriptsRef.listAll()
    .then(res=>{
res.items.forEach(el=>{
   
   let obj={
         urll:null,
    naame:null,
    type:null,
    size:null,
   };
    scriptsRef.child(el.location.path.split('/')[1]).getMetadata().then(em=>{
        
            obj.naame=em.name
            obj.type=em.type
            obj.size=em.size
    // ************************************

            // this.setState(prev=>({size:[...prev.size,em.size],naame:[...prev.naame,em.name],type:[...prev.type,em.type]})
    // ************************************

            
        scriptsRef.child(em.name).getDownloadURL().then(ek=>{
            obj.urll=ek
            if(this._isMounted){
            this.setState(prev=>({pdfData:[...prev.pdfData,obj]}))
            
            }
    // ************************************

                // this.setState(prev=>({urll:[...prev.urll,ek]}))
    // ************************************
                
            })
       
    })


}
)
    })
}

componentDidMount(){
    this._isMounted=true
   
    this.settingup()

//     scriptsRef.listAll()
//     .then(res=>{
// res.items.forEach(el=>{
   
//    let obj={
//          urll:null,
//     naame:null,
//     type:null,
//     size:null,
//    };
//     scriptsRef.child(el.location.path.split('/')[1]).getMetadata().then(em=>{
        
//             obj.naame=em.name
//             obj.type=em.type
//             obj.size=em.size
//     // ************************************

//             // this.setState(prev=>({size:[...prev.size,em.size],naame:[...prev.naame,em.name],type:[...prev.type,em.type]})
//     // ************************************

            
//         scriptsRef.child(em.name).getDownloadURL().then(ek=>{
//             obj.urll=ek
//             if(this._isMounted){
//             this.setState(prev=>({pdfData:[...prev.pdfData,obj]}))
            
//             }
//     // ************************************

//                 // this.setState(prev=>({urll:[...prev.urll,ek]}))
//     // ************************************
                
//             })
       
//     })


// }
// )
//     })


}

componentDidUpdate(){
    if(this.props.uploaded){
        // console.log('in ref fun');
        this.props.afterUploadRefresh()
        this.refresh()
    }

}


componentWillUnmount() {
    this._isMounted = false;
  }

  deleting=(fileName)=>{
scriptsRef.child(fileName).delete().then(
// window.location.reload()
this.refresh()
)
.catch(err=>{

    console.log('not deleted try again::::::'+err)
}
)
  }

    render(){



        let style={
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'center',
        }


      
        let cards=<Spinner/>;

    // console.log(cards);
if(this.state.pdfData.length>0){
   cards= this.state.pdfData.map((e)=>(
        <Pdfcard tit={e.naame} url={e.urll} type={e.type} size={e.size} key={e.naame} clicked={()=>this.deleting(e.naame)}/>
    ))
} 



        return(
<div style={style}>
{cards}
</div>
        );
    }
}

const mapStateToProps=state=>{
    return{
uploaded:state.memlog.uploaded
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        afterUploadRefresh:()=>dispatch(fileuploaddone())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pdfcards)