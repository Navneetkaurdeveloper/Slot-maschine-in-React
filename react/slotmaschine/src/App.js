import React from 'react';

const SlotM=(props) =>{


  let x=props.x;
  let y= props.y;
  let z=props.z;

  if ((x===y)&& (y===z)){
    return(
      <>
<div className='Slot_inner'>
<h1> {x} {y} {z} </h1>
<h1>This is Matching</h1>

</div>
      </>
    )
  }
else{

  return(
    <>
<div className='Slot_inner'>
<h1> {x} {y}{z} </h1>
<h1>This is not  Matching</h1>

</div>
</>);
}
};


  

const App =() =>{
return(<>
<h1 className="heading_style">
 🎰 Welcome to{" "} <span style={{fontWeight:"bold"}}>Slot Maschine Game</span>🎰</h1>
<div className="slotmaschine">


 <SlotM x= '😄' y= '😄' z='😄' />
 
 <hr/>
 <SlotM x='😄' y='😠' z='😄'/>

 <hr/>
 <SlotM x='🍎' y='🍎' z='🍌'/>
 <hr/>
 <SlotM x='🍌' y='🍌' z='🍌'/>
 
</div>
</>)
};


export default App;
