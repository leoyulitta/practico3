import React from 'react'
import Input from './Input'
import Label from './Label'

export default function Login() {
    return (
        <div id={"login"}>
            <Label texto={"Jugador"} htmlFor={"nombreParticipante"}></Label>
            <Input type={"text"} id={"nombreParticipante"} autoFocus={"true"} value={" "} readOnly={"false"}/>
<input type={"button"} value={"Entrar"} id={"botonEntrar"}/>
        </div>
    )
}

