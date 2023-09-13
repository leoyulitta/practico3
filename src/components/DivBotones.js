import React from 'react'
import Button from './Button'

export default function DivBotones() {
  return (
    <div id={"btn"}>
        <Button type={"button"} value={"jugar"} id={"botonJugar"} disabled={"true"}/>
        <Button type={"button"} value={"reiniciar"} id={"botonReiniciar"} disabled={"true"}/>
    </div>
  )
}
