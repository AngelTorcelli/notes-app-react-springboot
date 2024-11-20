import React from 'react';
import { Link } from "react-router-dom";
import { IconNotes, IconFolders  } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const handleClickNote = () => {
    navigate('/note/create');
  }


  return (
    <section className="section-left">
    <img src="conejo.jpg" alt="logo" className="logo-img" />
    <h2>Notes</h2>
    <button onClick={handleClickNote}>+ New Note</button>
    <nav>
      <ul>
        <li>
          <Link to="/" className='link'>
            <IconNotes />          
            Notes
          </Link>
        </li>
        <li>
          <Link to="/archived" className='link'>
          <IconFolders />      
           Archived</Link>
        </li>
      </ul>
    </nav>
  </section>
  )
}

export default Navbar