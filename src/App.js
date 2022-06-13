import React, { Component } from 'react'
import Phpro from './PhProfile.JPG'

 class App extends Component {
  constructor(props){
   super(props);
   this.state={
  
      person:{
      fullName:"boumiza nawres",
      bio:"..",
      imgsrc:Phpro,
      profession:"future developper",
      },
      show:true ,
      count:0,
   }

  }
  show=()=>{
    this.setState({show:!this.state.show})
  }
componentDidMount() { 
 setInterval(()=>{
    this.setState({count:this.state.count+1})
  }, 50);
 }
  render() {
    return (
      <div>
       {this.state.show ? 
    <div><h1>{this.state.count}</h1>
    <h1>hii {this.state.person.fullName}</h1>
    <p> tell me about you {this.state.person.bio}</p>
    <img src={this.state.person.imgsrc} alt='photoprofile' style={{width:'80px', height:'80px'}}></img>
    <h3>can you tell me what is your job {this.state.person.profession}</h3>
    </div>: null} 
        
        <button onclick={this.show}>show </button>  

      </div>
    )
  }
}


export default App