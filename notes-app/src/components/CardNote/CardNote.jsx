import React from 'react'
import './CardNote.css'
import { IconTag } from '@tabler/icons-react';

const CardNote = ({ nota, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
    <div className='textNote'>
      <div>
        
        <label>{nota.titulo}</label>
      </div>
        <pre>{nota.contenido}</pre>
    </div>
    <div className='tagNote'>
    <IconTag /><label> {nota.etiqueta.nombre}</label>
    </div>
  </div>
  )
}

export default CardNote;