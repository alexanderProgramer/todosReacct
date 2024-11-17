import React from 'react'

export const  ShowIncrement= React.memo(({increment}) => {
    console.log('Me volvi a generear');
  return (

      <button 
        className='btn btn-primary'
        onClick={() => {
            console.log('entry to show increment');
            increment(5);
        }}
      
      > 
        Incrementar
      </button>
    
  )
})
