import React, { useEffect, useReducer } from 'react';
import TodoList from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodos } from '/src/Hooks/useTodos';

export const TodoApp = () => {
    //useTodo
    //todos, handleDeleteTodo, handleToggleTodo, handleNewTodo
    const {todos, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodos();


  return (
    <>
    <h1>Todo App {todos.length} <small>pendientes:{todos.filter(todo => !todo.done).length}</small></h1>
     <hr />
      <div className="row">
        <div className='col-7'>
            <TodoList todos={todos}
            onDeleteTodo = {handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
            />    
        </div>
        <div className="col-5">

            <h4>Agregar TODO</h4>
            <hr />
                <TodoAdd onNewTodo={ todo => handleNewTodo(todo)}/>
        </div>

      </div>

      
    </>
  )
}

export default TodoApp
