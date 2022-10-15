import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './globalStyle'
import { App } from './containers/App'
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
)
