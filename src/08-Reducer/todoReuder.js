export const todoReducer = (initialState = [], action) => {
    switch(action.type) {
        case  '[TODO] Add Todo':
            return [...initialState, action.payload]
          //return initialState
        case '[TODO] Remove todo':
            console.log('code in todo reducer action, entry for filter')
            return initialState.filter(todo =>todo.id !== action.payload);
            //return initialState;
        case '[TODO] tooggle Todo':
            console.log('code in todo reducer action, entry for toogle')
            //return initialState.filter(todo =>todo.id == action.payload);
            return initialState.map( todo => {

                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        done:!todo.done

                    }
                }
                return todo;
            })
           
            default : return initialState;

    }

    
}