import React from 'react'
import ImagenBtn from './ImagenBtn'
import piedra from '../imagenes/piedra.jpg'
import papel from '../imagenes/papel.png'
import tijera from '../imagenes/tijera.png'

export default function Jugadas() {
  return (
    <div id={"btnJugadas"}>
        <ImagenBtn type={"image"} alt={"imagen piedra"} src={piedra} id={"botonPiedra"} disabled={"true"}></ImagenBtn>
        <ImagenBtn type={"image"} alt={"imagen papel"} src={papel} id={"botonPapel"} disabled={"true"}></ImagenBtn>
        <ImagenBtn type={"image"} alt={"imagen tijera"} src={tijera} id={"botonTijera"} disabled={"true"}></ImagenBtn>
    </div>

    )
}

