import React from 'react'

const Card = ({estudiante}) => {
  return (
    <div className='card' 
    style={{
      display: 'flex', 
      flexDirection:'column',
      width:'500px',
      backgroundColor:'grey',
      alignItems:'center',
      borderRadius:'10px'
      }}>
        <h2>Se ingresaron los datos del estudiante: {estudiante.nombre}</h2>
        <h3>Al curso de {estudiante.curso}</h3>
    </div>
  )
}

export default Card


