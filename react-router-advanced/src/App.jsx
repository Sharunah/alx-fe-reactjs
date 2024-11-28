
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Post from "./components/Post";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const isAuthenticated = true; // Simulate authentication

  return (
    <Router>
      <Routes>
        {/* Protected Profile Route with Nested Routes */}
        <Route
          path="profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Post Route */}
        <Route path="posts/:postId" element={<Post />} />

        {/* Dynamic Blog Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Fallback Route */}
        <Route path="*" element={<h3>Page Not Found</h3>} />
      </Routes>
    </Router>
  );
};

export default App;
