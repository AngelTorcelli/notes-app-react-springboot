import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error404 from './pages/404'
import NotesPage from './pages/NotesPage'
import NotesPageArchived from './pages/NotesPageArchived'
import CardNoteDetail from './components/CardNote/CardNoteDetail'
import NotesCreate from './pages/NotesCreate'

function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
        <main>      
          <Navbar/>
            <Routes>              
              <Route path="/" Component={NotesPage} />
              <Route path='/archived' Component={NotesPageArchived} />
              <Route path="/note/:id" element={<CardNoteDetail />} />
              <Route path='/note/create' Component={NotesCreate} />
              <Route path='*' Component={Error404} />
            </Routes>

        </main>
    </BrowserRouter>    
  )
}

export default App
