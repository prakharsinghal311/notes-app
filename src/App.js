import React, { useState } from "react";
import "./App.css";
import DeleteIcon from "@mui/icons-material/Delete";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import notesImage from "./assets/notesimage.jpg";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${notesImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  const addNote = () => {
    if (inputText) {
      const currentDate = new Date().toLocaleString();
      const newNote = { text: inputText, date: currentDate };
      setNotes([...notes, newNote]);
      setInputText("");
    }
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div style={backgroundStyle}>
      <div className="App">
        <h1 className="notes">
          <DensitySmallIcon />
          Notes App
        </h1>
        <div className="note-form">
          <input
            type="text"
            placeholder="Take a note"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="input"
          />
          <button onClick={addNote} className="button1">
            Add
          </button>
        </div>
        <div className="note-list">
          {notes.map((note, index) => (
            <div key={index} className="note">
              <p className="note-text">{note.text}</p>
              <p className="note-date">{note.date}</p>
              <DeleteIcon onClick={() => deleteNote(index)}></DeleteIcon>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
