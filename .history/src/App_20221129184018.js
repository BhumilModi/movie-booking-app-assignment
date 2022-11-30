import { Route, Router } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
function App() {
  return (
    <div>
      <Login />
      <Router>
        <Route exact path="/insert/your/path/here" component={YourComponent} />
      </Router>
    </div>
  );
}

export default App;
