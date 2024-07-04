import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import './index.css'
import FirstScreenText from './components/firstscreentext.jsx'
import { Container, Row,Col,Image} from 'react-bootstrap'
import Contact from './components/contactscreen.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <App/>
</React.StrictMode>
)