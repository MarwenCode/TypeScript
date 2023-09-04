import React, { ReactElement, useState } from "react";
import "./createnote.scss";
import { Note } from "../../noteModel/noteModel";
import { v4 as uuidv4 } from "uuid";

interface CreateNotesProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNotes = ({ notes, setNotes }: CreateNotesProps): ReactElement => {
  const [title, setTitle] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  // const [date, setDate]= useState<string>("")

  const addNote = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault();

    const id: string = uuidv4();

    const newNote: Note = {
      id,
      title,
      color,
      text,
      status,
      date: new Date().toDateString(),
    };

    // Update the 'notes' state with the new note.
    setNotes((prevNotes) => [...prevNotes, newNote]);

    try {
      // Make a POST request to save the new note to the database using fetch.
      await fetch("http://localhost:3001/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      // Optionally, you can fetch the updated notes from the database
      // and set them in your 'notes' state here.
    } catch (error) {
      console.error("Error saving the note to the database:", error);
    }

    console.log(newNote);

    // Clear the form fields for the next entry.
    setTitle("");
    setColor("");
    setText("");
    setStatus("");
  };

  return (
    <div className="addticket">
      <section className="heading">
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Title </label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">color </label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="name">Status </label>
            <select
              className="form-control"
              name="status"
              id="status"
              value={status}
              onChange={(event) => setStatus(event.target.value)}>
              <option value="new">new</option>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description of the issue</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              placeholder="Description"
              value={text}
              onChange={(e) => setText(e.target.value)}></textarea>
          </div>
          <div className="form-group">
            <button className="btn-block" onClick={(e) => addNote(e)}>
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateNotes;
