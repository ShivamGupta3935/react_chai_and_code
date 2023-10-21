import { useState } from "react"

function App() {
  
  const [color, setColor] = useState('olive')

  return (

   <div className="w-full h-screen  duration-200"
    style={{backgroundColor:color}}>
    
    <div className="fixed flex flex-wrap justify-center bottom-12
    inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white
        px-3 py-2  rounded-3xl">
          <button className="px-3 text-lg outline-none text-white rounded-full py-1 shadow-lg "
          style={{backgroundColor:"red "}}
          onClick = {() => setColor("red")} >
          Red
          </button>
          <button className="px-3 text-lg outline-none text-white rounded-full py-1 shadow-lg "
          style={{backgroundColor:"yellow "}}
          onClick = {() => setColor("yellow")} >
          yellow
          </button>
          <button className="px-3 text-lg outline-none text-white rounded-full py-1 shadow-lg "
          style={{backgroundColor:"blue "}} 
          onClick = {() => setColor("blue")}>
          blue
          </button>
          <button className="px-3 text-lg outline-none text-white rounded-full py-1 shadow-lg "
          style={{backgroundColor:"gray "}} 
          onClick = {() => setColor("gray")}>
          gray
          </button>
          <button className="px-3 text-lg outline-none text-white rounded-full py-1 shadow-lg "
          style={{backgroundColor:"purple "}} 
          onClick = {() => setColor("purple")}>
          purple
          </button>
          <button className="px-3 text-lg outline-none text-white rounded-full py-1 shadow-lg "
          style={{backgroundColor:"pink "}} 
          onClick = {() => setColor("pink")}>
          pink
          </button>
          <button className="px-3 text-lg outline-none text-white rounded-full py-1 shadow-lg "
          style={{backgroundColor:"lavender "}} 
          onClick = {() => setColor("lavender")}>
          lavender
          </button>
          <button className="px-3 text-lg outline-none text-black rounded-full py-1 shadow-lg "
          style={{backgroundColor:"white "}} 
          onClick = {() => setColor("white")}>
          white
          </button>
          <button className="px-3 text-lg outline-none text-white rounded-full py-1 shadow-lg "
          style={{backgroundColor:"black"}} 
          onClick = {() => setColor("black")}>
          black
          </button>
          <button className="px-3 text-lg outline-none text-white rounded-full py-1 shadow-lg "
          style={{backgroundColor:"olive "}} 
          onClick = {() => setColor("olive")}>
          olive
          </button>



      </div>
    </div>
   </div>

  )
}


export default App
