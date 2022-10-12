import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './globalStyle'
import Home from './containers/Home'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
//import './css/index.css'
import './css/home.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navbar />
        <Home />
        <GlobalStyle />
    </React.StrictMode>
)
