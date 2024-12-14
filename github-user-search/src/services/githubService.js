import axios from "axios";

// Function to fetch users based on a search query
export const fetchUserData = async (query) => {
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items; // Return the list of users from the response
  } catch (error) {
    console.error("Error fetching data from GitHub API:", error);
    throw error; // Re-throw the error to handle it in the calling component
  }
};
