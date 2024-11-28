
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Post from "./components/Post";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const isAuthenticated = true; // Simulate authentication

  return (
    <Router>
      <Routes>
        {/* Protected Route */}
        <Route
          path="profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* Nested Routes */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Route */}
        <Route path="posts/:postId" element={<Post />} />

        {/* Fallback Route */}
        <Route path="*" element={<h3>Page Not Found</h3>} />
      </Routes>
    </Router>
  );
};

export default App;

