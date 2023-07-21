import React from 'react'

function Score(props) {
  return (
    <div>
        <h3>Date:{props.people.date}</h3>
        <h3 className='score'>Score:{props.people.score}</h3>
    </div>
  )
}

export default Score