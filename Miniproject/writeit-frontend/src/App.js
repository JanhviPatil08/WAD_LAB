import React, { useState } from 'react';
import NoteForm from './components/NotewForm';
import NoteList from './components/NoteList';
import './App.css'; 

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleNoteAdded = () => setRefresh(!refresh);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">WriteIt</h1>
      <NoteForm onNoteAdded={handleNoteAdded} />
      <NoteList refresh={refresh} />
    </div>
  );
}

export default App;

