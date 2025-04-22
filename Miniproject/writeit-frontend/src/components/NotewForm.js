import React, { useState } from 'react';
import axios from 'axios';

const NoteForm = ({ onNoteAdded }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return;
    await axios.post('http://localhost:5000/notes', { title, content });
    onNoteAdded();
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="3"
          placeholder="Note Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Note</button>
    </form>
  );
};

export default NoteForm;
