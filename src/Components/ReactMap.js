import React from 'react'

function ReactMap() {
    const arr=[1,2,3,4,5]
    return (
      <div className='App'>
       {arr.map((nums)=>(
         <div>{nums},</div>
       ))}
      </div>
  )
}

export default ReactMap
