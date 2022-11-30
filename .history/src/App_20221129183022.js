import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {
  return (
    <div>
      <Routes>
        <Routes path='login' element={<Login />} />
        <Routes path='SignUp' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
