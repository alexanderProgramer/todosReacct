import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HooksApp from './HooksApp'
import CountApp from './01-usestate/CountApp'
import CounterWithHook from './CounterWithHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <MultipleCustomHooks />
  //</StrictMode>,
)
