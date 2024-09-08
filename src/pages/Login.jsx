import { useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import { FcGoogle } from 'react-icons/fc';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import { Spinner } from "@material-tailwind/react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formDetail, SetFormDetail] = useState({
    email: '',
    password: '',
  });

  let emailRef = useRef(null);
  let passwordRef = useRef(null);

  const validationschema = yup.object({
    name: yup.string().required('Name is Required'),
    username: yup.string().required('UserName is Required'),
    email: yup
      .string()
      .email('Invalid Email Format')
      .required('Email is Required'),
    password: yup
      .string()
      .required('Password is Required')
      .min(8, 'Password must be at least 8 character')
      .matches(/@/, "Password must contain the '@' symbol"),
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        `${BACKEND_URL}/api/user/signin`,
        formDetail
      );
      if (response.status == 200) {
        localStorage.setItem(
          'eventify_user',
          JSON.stringify(response.data.data)
        );
        // navigate('/');
      }
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
    }
  }

  function handleOnChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    SetFormDetail({ ...formDetail, [name]: value });
  }

  function handleKeyPress(event, nextref) {
    if (event.key == 'Enter') {
      nextref.current.focus();
    }
  }

  function handleSignupClick(e) {
    e.preventDefault();
    console.log('signup clicked');
    // handle signup
    navigate('/signup');
  }

  function handleClick(e) {
    e.preventDefault();
    // handle signup with google
  }

  return (
    <div className='h-screen w-full flex flex-col md:flex-row justify-center items-center'>
      {/* Login Form Container */}
      <div className='w-full h-full md:w-[40%] lg:w-[30%] md:h-[70%]'>
        <div className=' p-8 shadow-lg w-full h-full flex md:block flex-col mt-28 md:mt-0'>
          <h2 className='text-2xl font-bold text-center mb-8 '>Login</h2>

          <form onSubmit={handleSubmit} className=''>
            <div className='mb-4 '>
              <label
                htmlFor='email'
                className='block text-gray-700 font-semibold mb-2'
              >
                Email
              </label>
              <input
                type='email'
                id='Email'
                name='email'
                ref={emailRef}
                value={formDetail.email}
                onKeyUp={(event) => handleKeyPress(event, passwordRef)}
                onChange={handleOnChange}
                placeholder='Email'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500'
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='password'
                className='block text-gray-700 font-semibold mb-2'
              >
                Password
              </label>
              <input
                type='password'
                id='Password'
                name='password'
                ref={passwordRef}
                value={formDetail.password}
                onKeyUp={(event) => handleKeyPress(event, passwordRef)}
                onChange={handleOnChange}
                placeholder='Password'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              />
            </div>

            <button className='w-full bg-primary text-white py-2 rounded-lg hover:bg-deep-orange-800 transition duration-300 ease-in-out flex items-center justify-center' disabled={loading}>
              {loading ? <Spinner/> : 'Login'}
            </button>

            <hr className='border-gray-300 my-4' />

            <div>
              <div className='flex items-center justify-center gap-3 border border-gray-300 px-3 py-2 w-full transition duration-300 ease-in-out hover:border-blue-800'>
                <FcGoogle className='text-2xl' />
                <p>Login with Google</p>
              </div>
              <div className='text-[14px] flex justify-between mt-5 text-blue-600'>
                <NavLink to={'/forgotpassword'}>Forgot Your Password?</NavLink>
                <NavLink to={'/signup'}>Dont Have an Account? </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div className='w-full hidden md:block md:w-[40%] lg:w-[30%] h-[30%] md:h-[70%]  bg-yellow-500'>
        <img
          className='w-full h-full object-cover'
          src='https://images.pexels.com/photos/6347968/pexels-photo-6347968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Login Illustration'
        />
      </div>
    </div>
  );
};

export default Login;
