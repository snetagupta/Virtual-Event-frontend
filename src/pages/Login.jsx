import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { Spinner } from '@material-tailwind/react';
import axios from 'axios';
import * as yup from 'yup';

// Backend URL from environment
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const GOOGLE_CALLBACK_URL = import.meta.env.VITE_GOOGLE_CALLBACK_URL;

// Yup validation schema
const validationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid Email Format')
    .required('Email is Required'),
  password: yup
    .string()
    .required('Password is Required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/@/, "Password must contain the '@' symbol"),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [formDetail, setFormDetail] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Handle input change
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormDetail((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate the form with Yup schema
      await validationSchema.validate(formDetail, { abortEarly: false });
      setLoading(true);

      const response = await axios.post(`${BACKEND_URL}/api/user/signin`, formDetail);

      if (response.status === 200) {
        localStorage.setItem('eventify_user', JSON.stringify(response.data.data));
        navigate('/');
      }
    } catch (error) {
      if (error.inner) {
        // Catch validation errors from Yup
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const googleAuth = () => {
    window.open(GOOGLE_CALLBACK_URL, "_self");
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-[400px] p-5 flex flex-col gap-8 rounded-lg shadow-md'>
        <div className='flex justify-center flex-col items-center'>
          <h2 className='text-3xl font-semibold'>Welcome back</h2>
          <p className='font-thin text-gray-800'>
            Please enter your credentials to login
          </p>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          <div className='flex flex-col gap-1 relative'>
            <label className='text-[16px] font-semibold text-gray-700'>
              Email
            </label>
            <input
              type='text'
              name='email'
              value={formDetail.email}
              onChange={handleOnChange}
              className={`border border-gray-300 h-10 rounded-lg px-1 outline-none ${
                errors.email ? 'border-red-500' : ''
              }`}
              placeholder='Enter your email'
            />
            <div className='absolute bottom-[-22px]'>{errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}</div>
          </div>

          <div className='flex flex-col gap-1 relative'>
            <div className='flex justify-between text-sm'>
              <label className='text-[16px] font-semibold text-gray-700'>
                Password
              </label>
              <NavLink to='/forgot-password' className={"text-blue-600"}>Forgot Password?</NavLink>
            </div>
            <input
              type='password'
              name='password'
              value={formDetail.password}
              onChange={handleOnChange}
              className={`border border-gray-300 h-10 rounded-lg px-1 outline-none ${
                errors.password ? 'border-red-500' : ''
              }`}
              placeholder='Enter your password'
            />
            <div className='absolute bottom-[-22px]'>
            {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex gap-2 ml-2'>
              <input type='checkbox' name='remember' id='' className='w-4' />
              <label htmlFor='' className='text-[16px] font-thin'>
                Remember me
              </label>
            </div>

            <button
              type='submit'
              className='w-full bg-primary text-white py-2 rounded-lg hover:bg-deep-orange-800 transition duration-300 ease-in-out flex items-center justify-center'
              disabled={loading}
            >
              {loading ? <Spinner color='white' /> : 'Login'}
            </button>
          </div>

          <div className='flex items-center justify-between'>
            <hr className='flex-grow border-gray-300' />
            <p className='px-4 text-gray-500'>OR</p>
            <hr className='flex-grow border-gray-300' />
          </div>
        </form>

        <button className='w-full text-white py-2 rounded-lg transition duration-300 ease-in-out flex items-center justify-center gap-2 border h-10' onClick={googleAuth}>
          <FcGoogle className='text-[23px]' />
          <p className='text-black'>Login with Google</p>
        </button>

        <div className='flex items-center justify-center text-sm'>
          <p>
            Don't have an account?{' '}
            <NavLink to='/signup' className='text-blue-600'>
              Register
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
