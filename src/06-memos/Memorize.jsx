import React, { useState } from 'react'
import { useCounter } from '../Hooks/useCounter'
import { Small } from '../06-memos/Small';

export const Memorize = () => {
    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(0);

    const handleClick = () =>{
        setShow(!show);
    }
  return (
    <>
    <h1> Counter: <Small value={counter}/></h1>
    <hr />
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

