import React from 'react'
import { userForm } from '../Hooks/useForm'

export const TodoAdd = ({ onNewTodo})=> {

const {description, onInputChange,onResetForm} = userForm({
  description: '',

});

const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('Entry to form submit');
    if (description.length  <= 1) return;
    const newTodo = {
        id: new Date().getTime(),
        done : false,
        description: description,

    }
    onNewTodo(newTodo);
}

return (
    <form onSubmit = {onFormSubmit}>
        <input type="text" 
        placeholder=" Que hay que hacer ?"
        className="form-control" 
        name = "description"
        value = {description}
        onChange={onInputChange}
        
        />
        <button
            type='submit'
            className="btn btn-outline-primary mt-1">Agregar</button>
        
      
    </form>
  )
}
