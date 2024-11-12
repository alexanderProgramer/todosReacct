import { useState } from "react";

export const userForm = (initialForm = {}) => {

    
    const [formState,setFormState] = useState(initialForm)

const {username, email, password} = formState;

const reset = () => {
    setFormState (initialForm);
 }

const onInputChange = ({target}) => {
    const {name, value} = target;
    console.log({value});
    console.log({name});
    console.log({password});


    setFormState({
        ...formState,
        [name]: value
    })
}

    return {
        ...formState,
        formState,
        onInputChange,
        reset,

    }
}