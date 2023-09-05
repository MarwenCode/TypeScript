import React, { ReactElement } from "react";
import { Note } from "../../noteModel/noteModel";
import "./notecart.scss"; // Import your CSS/SCSS file

interface NoteProps {
  note: Note;
}

const NoteCard = ({ note }: NoteProps): ReactElement => {
  return (
    <div className={`card ${note.color}`}>
      <div className="top">
        <h1>{note.title}</h1>
        <p>{note.date}</p>
      </div>
      <div className="content">
        <p>{note.text}</p>
      </div>
      <div className="status">
        <p>Status: {note.status}</p>
      </div>
    </div>
  );
};

export default NoteCard;
