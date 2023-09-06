import React, { ReactElement } from "react";
import { Note } from '../../noteModel/noteModel';
import NoteCard from "../notecart/NoteCart";

interface noteListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList = ({ notes, setNotes }: noteListProps): ReactElement => {


    //delete note
    const deleteNote = (id: string) => {
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes)
    }




  return (
    <>
      {notes.map((note) => (
        // <p key={note.id}>{note.title}</p>
        <NoteCard note={note}   deleteNote={deleteNote} />
      
      ))}
    </>
  );
}

export default NotesList;
