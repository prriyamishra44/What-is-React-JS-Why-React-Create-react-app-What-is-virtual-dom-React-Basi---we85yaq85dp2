// write code for Welcome component here

import React from 'react'

export default function Welcome(props) {
    let message = `"Welcome to Newton School."`
  return (
    <div>
      <h1>Hey ! {props.name}</h1>
      <h2>{message}</h2>
    </div>
  )
}

