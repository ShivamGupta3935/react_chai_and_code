import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
//  const obj = {
//   username:"shivam",
//   password:123
//  }

  return (
    <>

    <h1 className='bg-green-400 p-4 text-white rounded-xl mb-4'>Vite  + Tailwind css</h1>
      <Card username="chai and code" btnTxt = "click Me"/>
    <Card username = "chai and js"  />
    </>
  )
}

export default App
