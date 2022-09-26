import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLogin } from '../features /user/usersSlice';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user.user)
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      function handleSubmit (e) {
        e.preventDefault();
        dispatch(fetchLogin(formData));
        navigate('/Profile' )
    }
    return (
        <div className='login-form'>
            <h1>Welcome back!</h1>
            <form onSubmit={handleSubmit} >
             <label htmlFor="username">Username:</label>
            <input
                id="username-login-input"
                type="text"
                name="username"
                placeholder="Enter your username.." 
                value={formData.username}
                onChange={handleChange}
            />
            <label htmlFor="password">Password:</label>
            <input
                id="password-login-input"
                type="password"
                name="password"
                placeholder="Enter your password.." 
                value={formData.password}
                onChange={handleChange}
            />
            <input type="submit" value="Submit" />
            </form>
            <button onClick={() => navigate('/' )}> back to home </button>
        </div>
    );
};

export default Login;