import React from 'react'

export default function ImagenBtn(props) {
  return (
    <input type={props.type} alt={props.alt} src={props.src} disabled={props.disabled}></input>
  )
}

