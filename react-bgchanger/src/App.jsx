import { useState } from "react"
import Component from "./Component"
function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
               <Component colour="red"/>
               <Component colour="blue"/>
               <Component colour="orange"/>
               <Component colour="yellow"/>
               <Component colour="green"/>
               <Component colour="pink"/>
               <Component colour="brown"/>
            </div>
          </div>
    
    </>
  )
}

export default App
