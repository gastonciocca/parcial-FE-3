import React from 'react'

const Formulario = ({setEstudiante, handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit} 
        style={{
            display: 'flex', 
            flexDirection:'column',
            width:'500px',
            alignItems:'center',
            marginBottom:'10px'
            }}>
        <label >Nombre del estudiante</label>
        <input type="text" onBlur={(e) => setEstudiante((prevState) => ({...prevState, nombre: e.target.value}))}/>
        <label >Curso: </label>
        <input type="text" onBlur={(e) => setEstudiante((prevState) => ({...prevState, curso: e.target.value}))}/>

        
        <button style={{backgroundColor:'grey'}}>Enviar</button>
    </form>
  )
}

export default Formulario