import React from 'react'

function ReactFilter() {
    const arr=[1,2,3,4,5]
    return (
      <div className='App'>
       {arr.filter((nums)=>(
         nums !==3
       ))}
      </div>
  )
}

export default ReactFilter
