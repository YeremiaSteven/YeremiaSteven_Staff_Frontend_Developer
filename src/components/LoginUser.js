import React, { useState } from "react";

// A mock login function (you can replace this with real API calls)
const mockLogin = (username, password) => {
  return username === "admin" && password === "password";
};

const LoginUser = () => {
  // State to track if the user is logged in or using as a guest
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (mockLogin(username, password)) {
      setIsAuthenticated(true);
      setIsGuest(false); // If they log in, they're no longer a guest
    } else {
      setErrorMessage("Invalid credentials, try again.");
    }
  };

  // Function to continue as guest
  const continueAsGuest = () => {
    setIsGuest(true);
    setIsAuthenticated(false);
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setIsGuest(false);
  };

  return (
    <div id="login">
      {isAuthenticated ? (
        <div>
          <h2 className="text-center text-white" >Welcome, User!</h2>
          <button className="user-button" onClick={logout}>Logout</button>
        </div>
      ) : isGuest ? (
        <div>
          <h2 className="text-center text-white" >Welcome, Guest!</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2 className="text-center text-white">Login to Your Account</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="username">Username:</label>
              <input className="input.field"  type="text" name="username" required />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" required />
            </div>
            <button type="submit">Login</button>
          </form>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

          <hr />
          <button className="guest-button" onClick={continueAsGuest}>Continue as Guest</button>
        </div>
      )}
    </div>
  );
};
export default LoginUser