import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client"

import App from './App.jsx'
import React from 'react'

//{Evaluated Expression}
  const username="Anand" 
  const anotherElement=(
    <a href="https://react.dev" target='_blank'>Click me to visit React</a>
  )

// Creating our own react component/element using React.createElement
const reactElement=React.createElement(
  'a',
  {href:"https://chaicode.com",target:'_blank'},
  "Click here to visit ChaiCode",
  anotherElement
)


// Rendered our virtual DOM using ReactDOM and grabing root element 
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <App/>
  {reactElement}
  </>
)