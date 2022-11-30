import { Route, Router } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
// import SignUp from './components/SignUp';
function App() {

  return (
    <BrowserRouter>

      <Router>
        <Route path='/' element={Login} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
