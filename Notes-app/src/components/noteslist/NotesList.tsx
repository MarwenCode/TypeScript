import React, { ReactElement } from "react";
import { Note } from '../../noteModel/noteModel';
import NoteCard from "../notecart/NoteCart";

interface noteListProps {
  notes: Note[];
}

const NotesList = ({ notes }: noteListProps): ReactElement => {
  return (
    <>
      {notes.map((note) => (
        // <p key={note.id}>{note.title}</p>
        <NoteCard note={note}/>
      
      ))}
    </>
  );
}

export default NotesList;
