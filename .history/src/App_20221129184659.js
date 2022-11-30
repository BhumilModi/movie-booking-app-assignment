import { Route, Router, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
// import SignUp from './components/SignUp';
function App() {
  const navigate = useNavigate()
  navigate("/login")
  return (
    <Router>
      <Route path='login' component={Login} />
    </Router>
  );
}

export default App;
