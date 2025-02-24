import React from 'react'
import { useFetch } from '../Hooks/useFetch'
import { useCounter } from '../Hooks/useCounter';
import LoadingMessage from './LoadingMessage';
import PokemonCard from './PokemonCard';

export const Layout = () => {

  const {counter, increment,decrement} = useCounter(2);
  const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  return (
    <>
    <h1>Informacion de Pokemon!!</h1>
    <hr />
    <p>counter {counter}</p>
   
    {isLoading ?  <LoadingMessage/>:
    (
       <PokemonCard
        id={data.id}
        name={data.name}
        sprites = {[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,    
        ]} />
    )
    }
   <h2>{data?.name}</h2>

   <button onClick={()=> counter >1 ? decrement():null}  className='btn btn-primary mt-2'>Anteriores</button>
   <button onClick={()=>increment()} className='btn btn-primary mt-2'>Siguiente</button>
       

      
    </>
  )
}


