import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
// import SignUp from './components/SignUp';
function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signUp' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
