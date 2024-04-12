import React from 'react'
import ReactDOM from 'react-dom/client'
import { IconContext } from "react-icons";
import App from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>,
)
