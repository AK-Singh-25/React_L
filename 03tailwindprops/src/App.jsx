import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './components/Card'
// import './App.css'

function App() {

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card btntext={"See More"} solution={"Design"}/>
      <Card btntext={"Learn More"} solution={"IT"}/>
      <Card btntext={"Explore"} solution={"Data"}/>

    </>
  )
}

export default App
