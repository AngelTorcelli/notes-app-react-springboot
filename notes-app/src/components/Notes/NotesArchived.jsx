import React, { useState, useEffect } from 'react';
import './Notes.css';
import CardNote from '../CardNote/CardNote';
import { getNotes } from '../../endpoints';
import { IconFolder } from '@tabler/icons-react';
import './NotesArchived.css';
import { useNavigate } from 'react-router-dom';

const NotesArchived = () => {

  const [archivedNotes, setPinnedNotes] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await getNotes();        

        const archivedNotes = response.filter((note) => note.archivado);
        console.log(archivedNotes);
        setPinnedNotes(archivedNotes);

        
      } catch (error) {
        console.error("Error al obtener las notas:", error);
      }
    };
    fetchNotes();
  }, []);


  const handleNoteClick = (id) => {
    navigate(`/note/${id}`);
  };

  return (
    <section className="section_archived">
        <h2>
        
        <span>Note</span>Craft</h2>
        <h3><IconFolder stroke={2} />Archived</h3>      
        <div className="notas">        
          <section className='archived'>
            {archivedNotes.length > 0 ? (
                archivedNotes.map((note) => (
                  
                  <CardNote className="card" nota={note} key={note.idnota} 
                  onClick={() => handleNoteClick(note.idnota)}/>
                  
                ))        
            ) : (
              <p>No hay notas disponibles</p>
            )}            
          </section>                                   
        </div>
    </section>
  );
};

export default NotesArchived;
