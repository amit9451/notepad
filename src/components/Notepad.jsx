import React, { useState } from 'react';

function NotesApp() {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');

  const handleSave = () => {
    // Handle save logic here
    console.log('Saved:', { title, notes });
  };

  const handleReset = () => {
    setTitle('');
    setNotes('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="border border-red-500 rounded-lg p-8 max-w-sm w-full bg-white shadow-md">
        <label className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
          className="w-full mb-4 p-2 border border-gray-400 rounded"
        />
        <label className="block text-gray-700 font-bold mb-2">Your Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Enter Notes....."
          className="w-full mb-4 p-2 h-24 border border-gray-400 rounded resize-none"
        />
        <div className="flex justify-around">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600"
          >
            Save
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotesApp;
