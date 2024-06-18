import React from 'react'
interface Props{
    nombre : string
    apellido : string
    edad : number
}

export const Perfil = (props:Props) => {
  return (
    <div>
        nombre : {props.nombre}
        apellido: {props.apellido}
        edad : 25  {props.edad}
        {props.edad>18 && <p> eres mayor de edad</p>}
    </div>

  )
}
export default Perfil