import React, { useState } from 'react';
import githubApi from '../services/githubApi';

function SearchUser() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await githubApi.get(`/users/${username}`);
      setUser(response.data);
      setError(null);
    } catch (err) {
      setError('User not found');
      setUser(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {user && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} className="w-24 h-24 mt-2" />
          <p><a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a></p>
        </div>
      )}
    </div>
  );
}

export default SearchUser;
