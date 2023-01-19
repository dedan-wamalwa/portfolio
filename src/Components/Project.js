import React from 'react'

function Project({image,name}) {
  return (
    <div>
        <div style={{backgroundImg: `url(${image})`}}/>
        <h6 className='fw-bold text-black'>{name}</h6>
    </div>
  )
}

export default Project