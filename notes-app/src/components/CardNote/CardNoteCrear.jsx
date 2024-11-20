import React, { useState } from 'react'
import './CardNoteDetail.css';
import { useNavigate } from 'react-router-dom';
import { updateNote } from '../../endpoints';

const CardNoteCrear = () => {
    const navigate = useNavigate();
    const [destacado, setDestacado] = useState(false);
    const [archivado, setArchivado] = useState(false);
    const [etiqueta, setEtiqueta] = useState('Etiqueta');
    const [nombreEtiqueta, setNombreEtiqueta] = useState('');
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await updateNote(
              {
                  destacado : destacado, 
                  archivado: archivado, 
                  etiqueta: {idetiqueta: etiqueta.idetiqueta, nombre: nombreEtiqueta},
                  titulo: titulo, 
                  contenido: contenido
              });
          if (response.ok) {
            console.log('Nota creada correctamente');
            navigate('/');
          } else {
            console.error('Error al crear la nota');
          }  
        } catch (error) {
          console.error('Error al crear la nota:', error);
        }

    };
  return (
    <section className='noteDetails'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Titulo</label>
            <input type="text" id="title" name="title" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            <label htmlFor="content">Contenido</label>            
            <textarea id="content" name="content" value={contenido} onChange={(e) => setContenido(e.target.value)} ></textarea>
            <label htmlFor="etiqueta">Etiqueta</label>
            <input type="text" id="etiqueta" name="etiqueta" value={nombreEtiqueta} onChange={(e) => setNombreEtiqueta(e.target.value)} />
            <label htmlFor="destacado">Destacado</label>
            <input type="checkbox" id="destacado" name="destacado" checked={destacado} onChange={() => { setDestacado(!destacado)}} />
            <button type="submit">Actualizar nota</button>

        </form>
    </section>
  )
}

export default CardNoteCrear