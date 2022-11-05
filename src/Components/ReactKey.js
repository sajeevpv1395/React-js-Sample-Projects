import React from 'react'

function ReactKey() {
    const arr=[{
        id:1,
        name:"a",
       
      },
      {
        id:2,
        name:'b',
       
      },
    ]
      return (
        <div className='App'>
       {arr.map((nums)=>{ return<div key={nums.id}>{nums.name}</div>}
     
    )}
        </div>
  )
}

export default ReactKey
