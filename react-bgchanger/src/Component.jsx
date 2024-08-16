import React from 'react'

function Component({colour}) {
    const colorchange= function(colour){
        document.body.style.backgroundColor=colour
    }
  return (
    <div>
      <button
       onClick={() => colorchange(colour)}
       className="outline-none px-4 rounded-full py-1 text-white" style={{backgroundColor: colour}}>{colour}</button>
    </div>
  )
}

export default Component
