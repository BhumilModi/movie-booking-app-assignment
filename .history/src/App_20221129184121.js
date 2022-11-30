import { Route, Router } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignIn from './components/SignIn';
function App() {
  return (
    <div>
      <Login />
      <Router>
        <Route exact path="/signIn" component={SignIn} />
      </Router>
    </div>
  );
}

export default App;
