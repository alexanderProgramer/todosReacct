import { useState } from "react"

export const useCounter = (initialValue = 10) => {
    console.log('dede useCounter ', initialValue);

     const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        console.log('value increment ',counter +value);
        setCounter(counter + value);
    }

    const decrement = (value = 1) => {
        if (counter == 0) return;
        setCounter(counter - value);

    }

     const reset = () => {
        setCounter (0);
     }


    return {
        counter,
        increment,
        decrement,
        reset,

    }

}