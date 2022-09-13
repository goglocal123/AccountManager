import React, { useState } from 'react';
import axios from 'axios';

import loginImg from '../assets/loginImg.png';
import logo from '../assets/logo-original.png';
import signInImg from '../assets/sign-in.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [userDetails, setUserDetails] = useState([]);
  const [isLogin, setIsLogin] = useState(true);

  const inputClasses = 'mb-6 p-3 w-full block border rounded-lg';

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    console.log(isLogin ? 'Logging In' : 'Signing up');

    e.preventDefault();
    console.log(number, password);

    try {
      if (!isLogin) {
        const data = await axios.post('https://65.0.204.216/am/create/', {
          mobile_number: number,
          password: password,
        });
        console.log(data);
      }
      const { data } = await axios.get('https://65.0.204.216/am/');
      console.log(data);
      setUserDetails(data);
    } catch (err) {
      console.log(err);
    }

    const existingUser = userDetails.find(
      (user) => user.mobile_number === number && user.password === password
    );
    console.log(existingUser);
    // if (!existingUser) return alert('Invalid Credentials!');

    // navigate('/profile');
  };

  return (
    <main className='m-4 flex items-center'>
      <div>
        <img src={loginImg} className='w-3/4 mt-16' alt='Login' />
      </div>
      <div>
        <img src={logo} className='mt-16 mb-8' alt='Logo' />
        <img src={signInImg} className='mb-8' alt='Sign In' />
        <form className='w-96' onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type='text'
              className={inputClasses}
              placeholder='Enter Name'
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <input
            type='number'
            className={inputClasses}
            placeholder='Enter Your Number'
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            type='password'
            className={inputClasses}
            placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogin && (
            <input
              type='password'
              className={inputClasses}
              placeholder='Confirm Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          )}
          <button
            type='submit'
            className='p-3 bg-primary hover:bg-secondary text-white w-full rounded-lg'
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
          {isLogin && (
            <p className='mt-3 mb-12 text-sm text-right'>Forgot password?</p>
          )}
          <p className='mb-8 text-sm text-primary text-center'>
            {isLogin ? "Don't have an account" : 'Already have an account'}?{' '}
            <span
              className='font-bold underline hover:cursor-pointer'
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </span>
          </p>
          <p className='text-sm text-primary text-center'>
            By clicking "Continue", you agree to our{' '}
            <span className='text-blue-500'>
              Terms of Service and Privacy Policy
            </span>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
