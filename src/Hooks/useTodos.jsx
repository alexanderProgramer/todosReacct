import { useEffect, useState,useReducer } from 'react';
import { todoReducer } from "../08-Reducer/TodoReducer";


const init  = () =>{
    return JSON.parse( localStorage.getItem('todos'))|| [];
}

export const useTodos = () => {
    


const [todos,dispatch] = useReducer(todoReducer,[], init);

useEffect(() =>{
    console.log(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
}, [todos])

const  handleNewTodo = (todo) => {
    console.log('Entry to handle to do');
    const action ={
        type: '[TODO] Add Todo',
        payload:todo,
    }
    dispatch( action);
}

const handleDeleteTodo = (id) => {
    console.log('handle delete todo id is ', id);
    dispatch(
        {
            type:'[TODO] Remove todo',
            payload:id,
        }
    );
}


const handleToggleTodo = (id) => {
    console.log('handle toogle todo id is ', id);
    dispatch(
        {
            type:'[TODO] tooggle Todo',
            payload:id,
        }
    );
    
}

return {
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
}


}
