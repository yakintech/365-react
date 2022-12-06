import React from 'react'

function Logo({color, title}) {
  return (
    <div style={{backgroundColor: color}}>{title}</div>
  )
}

export default Logo