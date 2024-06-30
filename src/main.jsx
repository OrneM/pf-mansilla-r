import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' //  Upper CamelCase para nombrar los componentes de react
import './index.css'


const rootElement = document.getElementById('root')

ReactDOM.createRoot(rootElement).render(
 // <React.StrictMode>
    <App /> /*componente de react*/
 // </React.StrictMode>,
)
