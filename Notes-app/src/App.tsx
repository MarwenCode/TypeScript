import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Header from "./components/header/Header";
import { Note } from "./noteModel/noteModel";

import CreateNotes from "./components/createNote/CreateNotes";
import NotesList from "./components/noteslist/NotesList";
import { ContextApp } from "./context";
import './App.css'
import Quiz from "./quiz/Quiz";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const { darkMode } = useContext(ContextApp)

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("http://localhost:3000/notes");
      const data = await response.json();
      setNotes(data);
    };

    fetchNotes();
  }, []);

  console.log(notes);



  return (
    <div className={darkMode ? 'dark-mode' : ''}>
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<NotesList notes={notes}  setNotes={setNotes}/>} />
        <Route
          path="/createNote"
          element={<CreateNotes notes={notes} setNotes={setNotes} />}
        />
        <Route
          path="/quiz"
          element={<Quiz />}
        />
      </Routes>
      </Router>
      </div>
  );
}

export default App;
