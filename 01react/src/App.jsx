import { useState } from 'react'
import Test from './Test'



function App() {

  //{Evaluated Expression}
  const username="Anand"
  
  return (
    <>
      <h1>React Hero | {username}</h1>
      <Test/>

    </>
  )
}

export default App
