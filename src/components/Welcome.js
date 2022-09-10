// write code for Welcome component here

import React from 'react'

export default function Welcome(props) {
    
  return (
    <div>
      <h1>Hey ! {props.name}</h1>
      <h2>{props.message}</h2>
    </div>
  )
}

