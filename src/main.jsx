import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { FormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook'
// import { MultipleCsutomHooks } from './03-examples/MultipleCsutomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayautEffect/Layout'
// import { Memorize } from './06-memo/Memorize'
// import { MemoHook } from './06-memo/MemoHook'
// import { CallBackHook } from './06-memo/CallBackHook'
// import { Padre } from './07-tarea-memo/07-tarea-memo/Padre'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import './08-useReducer/intro-reducer'
// import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <BrowserRouter>
        <MainApp/>
    </BrowserRouter>
    
    // <Layout/>,
    
  
)
