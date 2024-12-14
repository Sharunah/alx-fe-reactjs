import axios from "axios";

// Function to fetch users based on search query, location, and minRepos
export const fetchUserData = async (query, location = "", minRepos = 0) => {
  try {
    // Construct the search query string
    let searchQuery = `${query}`;

    if (location) {
      searchQuery += `+location:${location}`;
    }

    if (minRepos > 0) {
      searchQuery += `+repos:>=${minRepos}`;
    }

    // GitHub Search API endpoint with the constructed query
    const response = await axios.get(`https://api.github.com/search/users?q=${searchQuery}`);

    return response.data.items; // Return the list of users from the response
  } catch (error) {
    console.error("Error fetching data from GitHub API:", error);
    throw error; // Re-throw the error to handle it in the calling component
  }
};
