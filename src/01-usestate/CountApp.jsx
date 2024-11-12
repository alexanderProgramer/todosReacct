
import React, { useState } from 'react'




const CountApp = () => {
   const [state,setCount] = useState({
    count1:10,
    count2:11,
    count3:12,
    count4:100,

   });
   const {count1, count2, count3, count4} = state;
  return (
    <>
      <h1>Counter: {count1} </h1>
      <h1>Counter: {count2} </h1>
      <h1>Counter: {count3} </h1>
      <h1>Counter: {count4} </h1>
      <hr />
      <button className ="btn" onClick={() => setCount({
        ...state,
        count1: count1+1 ,
        // count1: count1+1 ,
        // count2: count1+2 , 
        // count3: count3+3,
        // count4: count4+4  
       
      })}>+1</button>
   
    </>
  )
}

export default CountApp
