import { useState } from 'react'
import Header from './components/header/Header';
import { Note } from './noteModel/noteModel';

import CreateNotes from './components/createNote/CreateNotes';
// import './App.css'

function App() {
  const [notes, setNotes] = useState<Note[]>([])
  

  return (
    <>
    <Header />
    <CreateNotes notes={notes} setNotes={setNotes} />
    
    </>
  )
}

export default App



