
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL

  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      <p>This is a detailed view of blog post {id}.</p>
    </div>
  );
};

export default BlogPost;
