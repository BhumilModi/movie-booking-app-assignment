import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {
  const navigate = useNavigate()

  const fetchUser = () => {
    const userInfo = localStorage.getItem("user") !== undefined
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();
    return userInfo;
  }

  useEffect(() => {
    const user = fetchUser()
    console.log(user)
    if (!user) {
      navigate("/login")
    }
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
}

export default App;
