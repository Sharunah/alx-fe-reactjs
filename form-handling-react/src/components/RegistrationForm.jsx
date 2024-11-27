import React, { useState } from "react";

const RegistrationForm = () => {
  // Form field states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error messages state
  const [errorMessages, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {
      username: "",
      email: "",
      password: "",
    };

    if (!username) errors.username = "Username is required.";
    if (!email) errors.email = "Email is required.";
    if (!password) errors.password = "Password is required.";

    if (errors.username || errors.email || errors.password) {
      setErrors(errors);
    } else {
      setErrors({});
      console.log("Form submitted:", { username, email, password });
    }
  };

  return (
    <div className="registration-form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            value={username}
          />
          {errorMessages.username && (
            <p className="error">{errorMessages.username}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            value={email}
          />
          {errorMessages.email && (
            <p className="error">{errorMessages.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            value={password}
          />
          {errorMessages.password && (
            <p className="error">{errorMessages.password}</p>
          )}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
