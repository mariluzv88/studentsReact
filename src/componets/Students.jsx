import React from 'react'


function Students(props) {
  return (
    <div className='bio'>
    <h1>{props.people.name}</h1>
    <h3>{props.people.bio}</h3>
    
    </div>
  )
}

export default Students