
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

const PostsComponent = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(
    ["posts"], // Query key
    fetchPosts, // Fetch function
    {
      staleTime: 60000, // Cache the data for 1 minute
      cacheTime: 300000, // Keep the cache for 5 minutes
      refetchOnWindowFocus: true, // Refetch data when window gains focus
      keepPreviousData: true, // Keep showing old data while fetching new
    }
  );

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>Error fetching posts: {error.message}</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
