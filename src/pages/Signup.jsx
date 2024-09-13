import React from 'react';
import { NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className=' w-[400px] p-5 flex flex-col gap-8 rounded-lg shadow-md'>
        <div className='flex justify-center flex-col items-center'>
          <h2 className='text-3xl font-semibold'>Create an Account</h2>
          <p className='font-thin text-gray-800'>
            Please fill in the details to sign up
          </p>
        </div>
        <div className='flex flex-col gap-6'>
          {/* Name Field */}
          <div className='flex flex-col gap-1'>
            <label className='text-[16px] font-semibold text-gray-700'>
              Name
            </label>
            <input
              type='text'
              className='border border-gray-300 h-10 rounded-lg px-1 outline-none'
              placeholder='Enter your name'
            />
          </div>
          {/* Email Field */}
          <div className='flex flex-col gap-1'>
            <label className='text-[16px] font-semibold text-gray-700'>
              Email
            </label>
            <input
              type='text'
              className='border border-gray-300 h-10 rounded-lg px-1 outline-none'
              placeholder='Enter your email'
            />
          </div>
          {/* Password Field */}
          <div className='flex flex-col gap-1'>
            <label className='text-[16px] font-semibold text-gray-700'>
              Password
            </label>
            <input
              type='password'
              className='border border-gray-300 h-10 rounded-lg px-1 outline-none'
              placeholder='Enter your password'
            />
          </div>
          {/* Confirm Password Field */}
          <div className='flex flex-col gap-1'>
            <label className='text-[16px] font-semibold text-gray-700'>
              Confirm Password
            </label>
            <input
              type='password'
              className='border border-gray-300 h-10 rounded-lg px-1 outline-none'
              placeholder='Confirm your password'
            />
          </div>
          {/* Register Button */}
          <button className='w-full bg-primary text-white py-2 rounded-lg hover:bg-deep-orange-800 transition duration-300 ease-in-out flex items-center justify-center'>
            Register
          </button>
          {/* OR Divider */}
          <div className='flex items-center justify-between'>
            <hr className='flex-grow border-gray-300' />
            <p className='px-4 text-gray-500'>OR</p>
            <hr className='flex-grow border-gray-300' />
          </div>
        </div>
        {/* Register with Google */}
        <button className='w-full text-white py-2 rounded-lg transition duration-300 ease-in-out flex items-center justify-center gap-2 border h-10 mt-[-20px]'>
          <FcGoogle className='text-[23px]' />
          <p className='text-black'>Sign up with Google</p>
        </button>
        {/* Already have an account */}
        <div className='flex items-center justify-center text-sm'>
          <p>
            Already have an account?{' '}
            <NavLink to='/login' className={'text-blue-600'}>
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
