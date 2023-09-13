import React from 'react'

export default function Button(props) {
  return (
    <input type={props.type} value={props.value} id={props.id} disabled={props.disabled}></input>
  )
}

