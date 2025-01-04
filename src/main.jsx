import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HooksApp from './HooksApp'
import CountApp from './01-usestate/CountApp'
import CounterWithHook from './CounterWithHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import FocusScreen from './04-useRef/FocusScreen'
import { Memorize } from './06-memos/Memorize'
import { MemoHook } from './06-memos/MemoHook'
import {CallbackHook} from './06-memos/CallbackHook'
import { Padre } from './07-tarea-memorize/Padre'
import './08-Reducer/introduccion-Reducer';
import TodoApp from './08-Reducer/TodoApp'


createRoot(document.getElementById('root')).render(
  //<StrictMode>
    //<MultipleCustomHooks />
    //<FocusScreen/>
    //<Memorize/>
    //<MemoHook/>
    //<CallbackHook/>
   //<Padre/>
   <TodoApp/>
  //</StrictMode>,
)
