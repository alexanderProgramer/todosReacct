import React, { useCallback, useState } from 'react'
import { useCounter } from '../Hooks/useCounter'
import {ShowIncrement} from './ShowIncrement';
export const CallbackHook = ()=> {

    const [counter, setCounter] = useState(10);
    const incrementFather = useCallback (
        (value)=> {
            console.log('entry to increment father ');
            setCounter( (c) => c + value)
        },[],
    )

    /*const incrementFather = () =>{
        setCounter(counter + 1);

    }*/
  return (
    <>
      <h1> useCallback Hook: { counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather}/>
    </>
  )
}
