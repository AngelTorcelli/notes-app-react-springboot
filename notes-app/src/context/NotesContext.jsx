import React, { createContext, useState, useEffect} from 'react'
import { getNotes } from '../endpoints';

export const NotesContext = createContext([]|null);

export function NotesProvider({children}) {
    const [notes, setNotes] = useState([]);
    const [etiquetas, setEtiquetas] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await getNotes();        
                setNotes(response);
                console.log("notas desde contexto: ", response);
            } catch (error) {
                console.error("Error al obtener las notas:", error);
            }
        }
        fetchNotes();        
    }, [])

    return (
        <NotesContext.Provider value={{notes, setNotes, etiquetas, setEtiquetas}}>
            {children}
        </NotesContext.Provider>
    )
}