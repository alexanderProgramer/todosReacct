import React from 'react'
import { useCounter } from './Hooks/useCounter';

const CounterWithHook = () => {
    const {counter, increment, decrement,reset} = useCounter(20) ;
    console.log('counter is',counter);
  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />
      <button onClick={()=> increment(200000000)} className='btn btn-primary'>+1</button>
      <button onClick ={reset} className='btn btn-primary'>reset</button>
      <button onClick={()=> decrement(30000)} className='btn btn-primary'>-1</button>
    </>
  )
}

export default CounterWithHook
