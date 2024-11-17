import React, { useMemo, useState } from 'react'
import { useCounter } from '../Hooks/useCounter'


const heavyStuff = (iterationNumber = 100) =>{
  for( let i = 0; i< iterationNumber; i++) {
    console.log('Ahi vamos');
  }
  return `${iterationNumber} iteraciones realizadas`;

}


export const MemoHook = () => {
    const {counter, increment} = useCounter(4000);
    const [show, setShow] = useState(0);
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

    const handleClick = () =>{
        setShow(!show);
    }
  return (
    <>
    <h1> Counter: <small>{counter}</small></h1>
    <hr />
    <h4>{memorizedValue}</h4>
    <button 
    className='btn btn-primary'
    onClick={() => increment()}>
 
        +1
    </button>
    <button
    className='btn btn-outline-primary'
    onClick={handleClick}
    >
        Show/Hide {JSON.stringify(show)} 
    </button>
      
    </>
  )
}

