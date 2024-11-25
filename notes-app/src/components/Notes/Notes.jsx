import React, { useState, useEffect } from "react";
import "./Notes.css";
import CardNote from "../CardNote/CardNote";
import { getNotes, getTags } from "../../endpoints";
import { IconPin, IconNote, IconFilter } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState([]);
  const [filter, setFilter] = useState("all");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [notesResponse, tagsResponse] = await Promise.all([getNotes(), getTags()]);
        setNotes(notesResponse);
        setTags(tagsResponse);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  const handleNoteClick = (id) => navigate(`/note/${id}`);

  const handleFilterChange = (filter) => setFilter(filter);

  const filterNotes = (notes, destacado) => {
    return notes.filter(
      (note) =>
        note.destacado === destacado &&
        (filter === "all" || note.etiqueta?.nombre === filter)
    );
  };

  const pinnedNotes = filterNotes(notes, true);
  const notPinnedNotes = filterNotes(notes, false);

  return (
    <section className="section-right">
      <h2>
        <span>Note</span>Craft
      </h2>

      <div className="filter">
        <IconFilter stroke={2} />
        <select onChange={(e) => handleFilterChange(e.target.value)} value={filter}>
          <option value="all">All</option>
          {tags.map((tag) => (
            <option key={tag.idetiqueta} value={tag.nombre}>
              {tag.nombre}
            </option>
          ))}
        </select>
      </div>

      <h3>
        <IconPin stroke={2} />
        Pinned
      </h3>
      <section className="pinned">
        {pinnedNotes.length > 0 ? (
          pinnedNotes.map((note) => (
            <CardNote
              className="card"
              nota={note}
              key={note.idnota}
              onClick={() => handleNoteClick(note.idnota)}
            />
          ))
        ) : (
          <p>No hay notas destacadas</p>
        )}
      </section>

      <hr />

      <h3>
        <IconNote />
        Notas
      </h3>
      <section className="not-pinned">
        {notPinnedNotes.length > 0 ? (
          notPinnedNotes.map((note) => (
            <CardNote
              className="card"
              nota={note}
              key={note.idnota}
              onClick={() => handleNoteClick(note.idnota)}
            />
          ))
        ) : (
          <p>No hay notas disponibles</p>
        )}
      </section>
    </section>
  );
};

export default Notes;
