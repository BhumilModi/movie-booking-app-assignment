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
    const usertoken = localStorage.getItem("user") !== undefined
      ? localStorage.getItem("user")
      : localStorage.clear();
    return usertoken;
  }

  const getUserData = async (token) => {
    const result = await fetch("http://localhost:5000/api/" + token).then(res => res.json());
    console.log(result.data[0])
    localStorage.setItem("userDetails", result.data)
  }

  useEffect(() => {
    const user = fetchUser()
    console.log(user)
    if (!user) {
      navigate("/login")
    } else {
      getUserData(user)
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
