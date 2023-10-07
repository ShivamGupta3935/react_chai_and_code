import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15

  let [counter, setCounter]= useState(15)

  const addValue = function(){
    counter += 1;
    if (counter <= 20) {
      setCounter(counter);
      // console.log("Add value",counter);
    }else{
      counter = 20
    }
  }

  const removeValue = function(){
    if (counter > 0) {
      setCounter(counter - 1 )
   }else{
    counter = 0
   }
  }

  return (
    <>
      
    <h1>Chai and react</h1>

    <h3>Counter Value : {counter}</h3>
    <button onClick={addValue} >Add Button : {counter}</button><br/>
    <button onClick={removeValue}>Remove btn : {counter}</button>
    <footer>Footer : {counter}</footer>
      
     
    </>
  )
}

export default App
