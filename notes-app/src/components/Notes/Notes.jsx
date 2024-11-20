import React, { useState, useEffect } from 'react';
import './Notes.css';
import CardNote from '../CardNote/CardNote';
import { getNotes } from '../../endpoints';
import { IconPin, IconNote } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [pinnedNotes, setPinnedNotes] = useState([]);
  const [notPinnedNotes, setNotPinnedNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await getNotes();        
        setNotes(response);

        const pinnedNotes = response.filter((note) => note.destacado);
        console.log(pinnedNotes);
        setPinnedNotes(pinnedNotes);
        const notPinnedNotes = response.filter((note) => !note.destacado && !note.archivado);
        setNotPinnedNotes(notPinnedNotes);
        console.log(response);
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
    <section className="section-right">
        <h2>
        
        <span>Note</span>Craft</h2>
        <h3><IconPin stroke={2} />Pinned</h3>      
        <div className="notas">        
          <section className='pinned'>
            {pinnedNotes.length > 0 ? (
                pinnedNotes.map((note) => (
                  
                  <CardNote className="card" 
                  nota={note} 
                  key={note.idnota}
                  onClick={() => handleNoteClick(note.idnota)}/>
                ))        
            ) : (
              <p>No hay notas destacadas</p>
            )}            
          </section>
          <hr />
        <h3><IconNote/>Notas</h3>      
                      
          <section className='not-pinned'>
            {notPinnedNotes.length > 0 ? (
                notPinnedNotes.map((note) => (                  
                  <CardNote className="card" nota={note} key={note.idnota}
                  onClick={() => handleNoteClick(note.idnota)} />
                ))        
            ) : (
              <p>No hay notas disponibles</p>
            )}            
          </section>          
        </div>
    </section>
  );
};

export default Notes;
