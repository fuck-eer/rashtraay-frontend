import { scriptsRef } from '../../../../Firebase/firebase'
import React, { Component } from 'react'
import Pdfcard from './pdfCard/pdfcard'
import Spinner from '../../../UI/Spinner/Spinner'

class Pdfcards extends Component{

state={
    urll:[],
    naame:[]
}

componentDidMount(){

    scriptsRef.listAll()
    .then(res=>{
res.items.forEach(el=>{
    // scriptsRef.child(el.location.path.split('/').[1]).getMetadata().then(em=>console.log(em))
scriptsRef.child(el.location.path.split('/').[1]).getDownloadURL().then(ek=>{
    this.setState(prev=>({urll:[...prev.urll,ek],naame:[...prev.naame,el.location.path.split('/').[1]]}))
 
})
}

)
    })

}

    render(){
        let style={
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'center',
        }

        let cards=<Spinner/>;

    
if(this.state.naame&&this.state.urll){
   cards= this.state.naame.map((e,i)=>(
        <Pdfcard tit={e} url={this.state.urll[i]}/>
    ))
} 

        return(
<div style={style}>
{cards}
</div>
        );
    }
}

export default Pdfcards