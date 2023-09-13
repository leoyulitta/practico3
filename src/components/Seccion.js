import React from 'react'
import Contadores from './Contadores'
import DivBotones from './DivBotones'
import Jugadas from './Jugadas'
import Login from './Login'

export default function Seccion() {
  return (
    <section>
        <Login/>
        <Contadores/>
        <Jugadas/>
        <DivBotones/>
    </section>
  )
}
