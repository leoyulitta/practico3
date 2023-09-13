import React from 'react'

export default function Input(props) {
  return (
    <input type={props.type} id={props.id} placeholder={"texto aqui"} autoFocus={props.autoFocus} value={props.value} readOnly={props.readOnly} size={props.size}></input>
  )
}

