import axios from "axios";

/**
 * Fetch user data from the GitHub API based on the provided username.
 * @param {string} username - The GitHub username to search for.
 * @returns {Promise<Object>} - A promise that resolves to the user data.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};
