import { useCallback, useEffect, useRef, useState } from "react"

function App() {
   const [length, setLength] = useState(8)
   const [numAllow, setNumAllowed] = useState(false)
   const [charAllowed, setCharAllowed] = useState(false)

   const [ password, setPassword] = useState("")

   // useRef () hook
    const passwordRef = useRef(null)

   const passwordGenerator = useCallback(() => {
       let pass = ""
       let str = "ABCDEFGHIJKLMNOPQRSTUBWXYZabcdefghijklmnopqrstuvwxyz"

       if(numAllow) str += "0123456789"
       if(charAllowed) str += "!@#$%^&*_+=~"

       for (let i = 0; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
        
       }

       setPassword(pass)
   },[length, numAllow, charAllowed, setPassword])

   //copy function text
   const copyPasswordToClipboard = useCallback(() => {
     passwordRef.current?.select()
     passwordRef.current.setSelectionRange(0, 99)
     window.navigator.clipboard.whiteText(password)
   },[password])

   useEffect(() => {
      passwordGenerator();
   },[length, numAllow, charAllowed, passwordGenerator])

  return (
   <div className='w-full max-w-md px-3 py-4 text-orange-400 bg-gray-700 shadow-md rounded-lg mx-auto my-8'>
     <h1 className="text-center text-white my-3">Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input 
      type="text"
      value={password}
      className="w-full outline-none py-1 px-3"
      placeholder="Password"
      readOnly
      ref={passwordRef}
      />
      <button
      onClick={copyPasswordToClipboard}
      className="bg-blue-600 outline-none px-2 py-2  shrink-0 ">
              copy
      </button>
    </div>
    <div className="flex gap-x-2 text-sm">
      <div className="flex items-center gap-x-1">
        <input
         type="range"
         min={6}
         max={50}
         value={length}
         className="cursor-pointer"
         onChange={(e) => {setLength(e.target.value)}}
         />
         <label> Length:{length}</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        defaultChecked = {numAllow}
        id="numberInput"
        onChange={() => {
          setNumAllowed(prev => !prev)
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox" 
        id="characterInput"  
        defaultChecked={charAllowed}      
        onChange={() => {
          setCharAllowed(prev => !prev)
        }}
        />
        <label htmlFor="characterInput">characters</label>
      </div>
    </div>
   </div>
  )
}

export default App
