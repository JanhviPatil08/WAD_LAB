import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NoteList = ({ refresh }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/notes')
      .then(res => setNotes(res.data))
      .catch(err => console.log(err));
  }, [refresh]);

  return (
    <div>
      <h2 className="mb-3">Saved Notes</h2>
      {notes.map(note => (
        <div key={note._id} className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
