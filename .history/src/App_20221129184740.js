import { useEffect } from 'react';
import { Route, Router, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
// import SignUp from './components/SignUp';
function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/login")
  })

  return (
    <Router>
      <Route path='login' component={Login} />
    </Router>
  );
}

export default App;
