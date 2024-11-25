import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getNoteById, updateNote, deleteNote } from '../../endpoints';
import './CardNoteDetail.css';
import { useNavigate } from 'react-router-dom';

const CardNoteDetail = () => {
    const { id } = useParams();
    const [note, setNote] = useState(null);

    const [destacado, setDestacado] = useState(false);
    const [archivado, setArchivado] = useState(false);
    const [etiqueta, setEtiqueta] = useState('');
    const [nombreEtiqueta, setNombreEtiqueta] = useState('');
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    

    const navigate = useNavigate();


    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await updateNote(
            {
                idnota: id, 
                destacado : destacado, 
                archivado: archivado, 
                etiqueta: {idetiqueta: etiqueta.idetiqueta, nombre: nombreEtiqueta},
                titulo: titulo, 
                contenido: contenido
            });
        if (response.ok) {
          console.log('Nota actualizada correctamente');
          navigate('/');
        } else {
          console.error('Error al actualizar la nota');
        }
      } catch (error) {
        console.error('Error al actualizar la nota:', error);
      }
    };



  useEffect(() => {
    const fetchNote = async () => {
      try {
        const selectedNote = await getNoteById(id);         
        console.log("selected note: " +selectedNote);
        setNote(selectedNote);
        setDestacado(selectedNote.destacado);
        setArchivado(selectedNote.archivado);
        setEtiqueta(selectedNote.etiqueta);
        setNombreEtiqueta(selectedNote.etiqueta.nombre);
        setTitulo(selectedNote.titulo);
        setContenido(selectedNote.contenido);
        
      } catch (error) {
        console.error("Error al obtener la nota:", error);
      }
    };
    fetchNote();
  }, [id]);

  if (!note) {
    return <p>Cargando...</p>;
  }

  const handleArchivar = () => {
    if(destacado){
      alert("No se puede archivar una nota destacada");
    }else{
      setArchivado(!archivado);
    }
  }

  const handleDestacar = () => {
    if(archivado){
      alert("No se puede destacar una nota archivada");
    }else{
      setDestacado(!destacado);
    }
  }

  const handleBorrar = async () => {
    if(archivado){
      alert("No se puede borrar una nota archivada");
    }else{
      const response = await deleteNote(id);
      if(response.ok){
        navigate('/');
        alert("Nota borrada con exito");
      }
    }
  }

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
            <input type="checkbox" id="destacado" name="destacado" checked={destacado} onChange={handleDestacar} />
            <label htmlFor="archivado">Archivado</label>
            <input type="checkbox" id="archivado" name="archivado" checked={archivado} onChange={handleArchivar} />
            <div className="buttons">
              <button type="submit" className='btn-actualizar'>Actualizar nota</button>
              
              <button type="button" className='btn-eliminar' onClick={handleBorrar}>Borrar</button>
            </div>
        </form>
    </section>
  );
};

export default CardNoteDetail;
