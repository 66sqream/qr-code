import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './components/Layout'
import { BrowserRouter } from "react-router-dom";
import './style/main.scss';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)
