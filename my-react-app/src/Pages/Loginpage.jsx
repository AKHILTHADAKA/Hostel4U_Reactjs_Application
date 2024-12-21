// LoginPage.js
import  { useState, useEffect } from 'react';
import './App.css';

const LoginPage = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    image: '',
  });
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: '',
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
    if (storedEmail && storedPassword) {
      setIsAuthenticated(true);
      setUser({
        name: localStorage.getItem('userName'),
        email: storedEmail,
        password: storedPassword,
        image: localStorage.getItem('userImage'),
      });
      setCurrentPage('home');
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
    if (
      loginDetails.username === storedEmail &&
      loginDetails.password === storedPassword
    ) {
      setIsAuthenticated(true);
      setUser({
        name: localStorage.getItem('userName'),
        email: storedEmail,
        password: storedPassword,
        image: localStorage.getItem('userImage'),
      });
      setCurrentPage('home');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (user.password !== e.target.confirmPassword.value) {
      alert('Passwords do not match!');
      return;
    }

    localStorage.setItem('userName', user.name);
    localStorage.setItem('userEmail', user.email);
    localStorage.setItem('userPassword', user.password);

    const file = e.target.image.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        localStorage.setItem('userImage', e.target.result);
        setShowSuccessPopup(true);
      };
      reader.readAsDataURL(file);
    } else {
      setShowSuccessPopup(true);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    setCurrentPage('login');
  };

  return (
    <div className="App">
      {/* Login Page */}
      {currentPage === 'login' && !isAuthenticated && (
        <div className="wrapper">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                required
                value={loginDetails.username}
                onChange={(e) =>
                  setLoginDetails({ ...loginDetails, username: e.target.value })
                }
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                required
                value={loginDetails.password}
                onChange={(e) =>
                  setLoginDetails({ ...loginDetails, password: e.target.value })
                }
              />
            </div>
            <div className="input-box button">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      )}

      {/* Register Page */}
      {currentPage === 'register' && (
        <div className="wrapper">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <div className="input-box">
              <input
                type="text"
                placeholder="Name"
                required
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                required
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                required
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="input-box">
              <input type="file" id="register-image" />
            </div>
            <div className="input-box button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div id="success-popup">
          <div id="popup-content">
            <span>Registration successful! ✅</span>
            <button onClick={() => setShowSuccessPopup(false)}>OK</button>
          </div>
        </div>
      )}

      {/* Home Page */}
      {currentPage === 'home' && isAuthenticated && (
        <div className="wrapper">
          <h2>Welcome, {user.name}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
