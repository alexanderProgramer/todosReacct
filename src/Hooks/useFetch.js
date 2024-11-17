import React, { useEffect, useState } from 'react'



const localCache= [];

export const useFetch = (url) => {
    const [state, setState] = useState({
        data:null,
        isLoading: true,
        hasError:false,
        error:null,
    });

    useEffect(()=>{
        console.log('entry in useEffect');
        getFetch();

    }, [url])

    const setLoadingState =() =>{
        setState({
            data:null,
            isLoading:true,
            hasError:false,
            error:null,
        })
    }

    const getFetch = async() => {

    if (localCache[url]) 
    {
        console.log('usando cache');
        console.log(' local cache has ', localCache[url]);
        setState({
            data:localCache[url],
            isLoading:false,
            hasError:false,
            error:null,
        })
        return;
    }    
    setLoadingState();
       const resp = await fetch(url);
        //sleep
        await new Promise(resolve => setTimeout(resolve, 1500));


        if ( !resp.ok) {
            setState({
                data:null,
                isLoading:false,
                hasError:true,
                error: resp.status,
                message: resp.statusText,
                
            });
            return;

        }
        
       const data = await resp.json();
       setState({
        data:data,
        isLoading:false,
        hasError:false,
        error:null,
       })
       console.log(data);

       // manejo del cache
       localCache[url] = data;
 
    }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,

  }
}


