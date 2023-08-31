import { useState } from 'react'
import Header from './components/header/Header';
import { Note } from './noteModel/noteModel';
import { v4 as uuidv4 } from 'uuid';
// import './App.css'

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: uuidv4(),
    title: "Meeting",
    text:"this is a text",
    color: "#dfdfdf",
    date: (new Date).toString()
  }])
  

  return (
    <>
    <Header />
    
    </>
  )
}

export default App
function uuuid() {
  throw new Error('Function not implemented.');
}

