import { useEffect, useState } from 'react'
import { Message } from './Message';
import { userForm } from '../Hooks/useForm';
export const FormWithCustomHook = () => {
    
    const {formState, onInputChange, username,email, password,reset} = userForm(
        {username:'',
          email:'',
         password:'',})

    //const {username, email,password} = formState; 


    return (
        <>
        <h1>Formulario Simple</h1>
        <hr />
        <input type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value = {username}
        onChange={onInputChange} />

        <input type="email"
        className="form-control"
        placeholder="alexanderpretyboy@gmai.com"
        name="email"
        value={email}
        onChange={onInputChange}/>

       <input type="password"
        className="form-control"
        placeholder="contasenia"
        name="password"
        value={password}
        onChange={onInputChange}/>
        <button onClick={reset} className='btn btn-primary mt-2'>Borrar</button>

        </>

    )

}