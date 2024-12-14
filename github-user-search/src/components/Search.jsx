import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (err) {
      setError["Looks like we cant find the user"];
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSearch} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {userData && (
        <div className="mt-4 border p-4 rounded">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-24 h-24 rounded-full mb-4"
          />
          <p><strong>Username:</strong> {userData.login}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
