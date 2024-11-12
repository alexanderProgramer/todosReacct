import React from 'react'
import { saveAs } from 'file-saver';


function PokemonCard({id, name, sprites = []}) {
   console.log(sprites);

   const handleDownload = (sprite) => {
    console.log('Entry to dowload method');
    fetch(sprite)
      .then(response => response.blob())
      .then(blob => {
        saveAs(blob, `${id}-${name}--${sprite}`); // Nombre del archivo descargado
      })
      .catch(error => console.error('Error al descargar la imagen:', error));
  };
   

    
  return (
    <section style={{height:200}}>
        <h2 className='text-capitalize'>#{id}-{name}</h2>

        {/*Images*/}

        <div>
            {
                sprites.map( sprite => (
                    <button key= {sprite} onClick ={() =>handleDownload(sprite)} > 
                         <img key={sprite} src={sprite} alt= {name}/>

                    </button>
                   
                    
                
                ))
              
            }
            <hr />

            {
                sprites.map( sprite => (
                    <button  key= {sprite} onClick ={() =>handleDownload(sprite)} className='btn btn-primary mt-2'> {name}-descargar</button>
                    
                
                ))
              
            }


        </div>

    </section>
  )
}

export default PokemonCard
