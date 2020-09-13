import { scriptsRef } from '../../../../Firebase/firebase'
import React, { Component } from 'react'
import Pdfcard from './pdfCard/pdfcard'
import Spinner from '../../../UI/Spinner/Spinner'

class Pdfcards extends Component{
_isMounted=false
state={
    urll:[],
    naame:[],
    type:[],
    size:[],
}

componentDidMount(){
    this._isMounted=true

    scriptsRef.listAll()
    .then(res=>{
res.items.forEach(el=>{
   
    scriptsRef.child(el.location.path.split('/')[1]).getMetadata().then(em=>{
        if(this._isMounted)
        this.setState(prev=>({size:[...prev.size,em.size],naame:[...prev.naame,em.name],type:[...prev.type,em.type]}))

    })
scriptsRef.child(el.location.path.split('/')[1]).getDownloadURL().then(ek=>{
    if(this._isMounted)
    this.setState(prev=>({urll:[...prev.urll,ek]}))
 
})


}
)
    })

}

componentWillUnmount() {
    this._isMounted = false;
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
if(this.state.naame&&this.state.urll){
   cards= this.state.naame.map((e,i)=>(
        <Pdfcard tit={e} url={this.state.urll[i]} type={this.state.type[i]} size={this.state.size[i]} key={e}/>
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