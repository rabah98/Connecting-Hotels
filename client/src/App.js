import { React, useEffect } from 'react'
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import { useDispatch } from "react-redux";


import Hotels from './features /hotels/Hotels';
import User from './features /user/User';
import Login from './components/Login';
import UserProfil from './features /user/UserProfile';
import { fetchCurrentUser } from './features /user/usersSlice';



const App = () => {
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch(fetchCurrentUser());
  }, [])
  
  return (
    <div>
      <BrowserRouter>
        <div className='Nav-Div'>
          <nav>
            <Link className='Link' to='/' >Home</Link>
            <Link className='Link-profile' to='/Profile' >Profile</Link>
            <Link className='Link' to='/Signup' >Sign up</Link>
            <Link className='Link' to='/Login' >Log in</Link>
          </nav>
        </div>
        <Routes>
            <Route path="/" element= { <Hotels />} />
            <Route path="/Profile" element= { <UserProfil />} />
            <Route path="/signup" element= { <User />} />
            <Route path="/login" element= { <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;