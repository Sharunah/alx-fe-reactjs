// src/App.jsx
import React, { useState } from 'react';
import { fetchUserData } from './services/githubService';
import Search from './components/Search';

function App() {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError(null);
    setUserData([]);

    try {
      const data = await fetchUserData(searchParams);
      if (data.length === 0) {
        setError('No users found with the specified criteria.');
      } else {
        setUserData(data);
      }
    } catch (err) {
      setError('Something went wrong while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p className="text-gray-500">Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {userData.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow-md">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-24 h-24 rounded-full mb-2"
            />
            <h2 className="text-lg font-bold">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
