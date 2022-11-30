import { Route, Router } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
// import SignUp from './components/SignUp';
function App() {

  return (
    <Router>
      <Route path='login' element={Login} />
    </Router>
  );
}

export default App;
