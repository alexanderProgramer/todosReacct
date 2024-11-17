import React, { useRef } from 'react'

const FocusScreen = () => {
    
    const inputRef = useRef();
   

    const onClick = ()=>{
        //console.log(inputRef);
        //document.querySelector('input').select();
        inputRef.current.select();      

    }
  return (
   <>
   <h1>Focus Screen</h1>

   <hr />
   <input type="text" 
   placeholder="Ingrese su nombre"
   className="form-control" 
   ref={inputRef}/>

<input type="text" 
   placeholder="Ingrese su nombre"
   className="form-control" 
   ref={inputRef}
   />

<input type="text" 
   placeholder="Ingrese su nombre"
   className="form-control" 
   ref={inputRef}/>
     
     <input type="text" 
   placeholder="Ingrese su nombre"
   className="form-control" 
   ref={inputRef}/>

  
  <button className="btn btn-primary mt-2"
  onClick={onClick}>
    Set Focus
   </button>
   </>
  )
}

export default FocusScreen
