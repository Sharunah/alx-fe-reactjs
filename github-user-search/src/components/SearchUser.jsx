import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const SearchUser = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h2>
      <form onSubmit={handleSubmit} className="flex mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 flex-grow rounded-l"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600">
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {userData && (
        <div className="border rounded p-4 shadow-md">
          <img src={userData.avatar_url} alt={userData.login} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h3 className="text-xl font-bold text-center">{userData.name || userData.login}</h3>
          <p className="text-center">
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Visit GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchUser;
