import { Route, Router } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {
  return (
    <div>
      <Router>
        <Route exact path="/signIn" component={SignUp} />
        <Route exact path="/" component={Login} />
      </Router>
    </div>
  );
}

export default App;
