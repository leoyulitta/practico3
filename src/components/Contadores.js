import React from 'react'
import Input from './Input'
import Label from './Label'

export default function Contadores() {
  return (
    <div id={"contadores"}>
        <Label texto={"Participante"} htmlFor={"contadorParticipante"}></Label>
        <Input type={"text"} value={"0"} readOnly={"true"} size={"1"} id={"contadorParticipante"}/>
        <Label texto={"Total"} htmlFor={"contadorGeneral"}></Label>
        <Input type={"text"} value={"0"} readOnly={"true"} size={"1"} id={"contadorGeneral"}/>
        <Label texto={"Pc"} htmlFor={"contadorPc"}></Label>
        <Input type={"text"} value={"0"} readOnly={"true"} size={"1"} id={"contadorPc"}/>
    </div>
  )
}

