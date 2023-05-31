import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Formulario from './Components/Formulario'

function App() {

  const [estudiante, setEstudiante] = useState({
    nombre: '',
    curso: null
  })

  const [show, setShow] = useState(false)
  const [mensajeError, setMensajeError] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault()
    if(estudiante.nombre.length >= 3 && estudiante.curso.length >=6 && estudiante.nombre === estudiante.nombre.trim()){
      setShow(true)
      setMensajeError('')

    } else {
     setShow(false)
     setMensajeError('Por favor chequea que la información sea correcta')

    }
  }


  return (
    <div className='App'>
      
      <h1>Carga de estudiante</h1>
      <Formulario handleSubmit={handleSubmit}  setEstudiante={setEstudiante}/>
      {show ?  <Card estudiante={estudiante} /> : null}
      {mensajeError && <p style={{color:'red'}}>{mensajeError}</p>}

     
    </div>
  )
}

export default App


