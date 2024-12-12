import React from 'react';
import './App.css';
import SearchUser from './components/SearchUser';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <SearchUser />
    </div>
  );
}

export default App;
 