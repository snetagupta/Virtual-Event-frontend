import React from 'react';
import Navbar from '../components/common/Navbar';

const Checkout = () => {
  return (
    <div>
        <Navbar/>
      <div className='flex md:flex-row flex-col p-5 md:px-20 gap-10 bg-gray-200 min-h-screen'>
        {/* Ticket Info */}
        <div className='flex md:flex-row flex-col bg-white rounded-lg w-full md:w-[70%]  h-fit'>
          <div className='w-full lg:w-1/3 p-4'>
            <img
              className='w-full object-cover rounded-lg h-[400px]'
              src='https://www.joblo.com/wp-content/uploads/2022/08/sonic-the-hedgehog-3-poster.jpg'
              alt='Movie Poster'
            />
          </div>
          <div className='w-full lg:w-2/3 p-4'>
            <div className='mb-4'>
              <p className='text-2xl font-bold'>Stre 2</p>
              <div className='flex space-x-2 mt-2'>
                <span className='border border-gray-300 text-gray-600 rounded py-1 px-2'>
                  U/A
                </span>
                <span className='border border-gray-300 text-gray-600 rounded py-1 px-2'>
                  Hindi
                </span>
                <span className='border border-gray-300 text-gray-600 rounded py-1 px-2'>
                  2D
                </span>
              </div>
            </div>
            <div className='mb-4'>
              <p className='text-lg font-semibold'>
                Gole Cinema, Ashok Cosmos Mall, Sanjay Place
              </p>
              <p className='text-gray-500 mt-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda porro impedit quidem aliquid, accusamus veritatis esse
                quod, labore omnis fuga.
              </p>
            </div>
            <div className='flex justify-between items-center text-gray-600'>
              <div>
                <p className='font-medium'>Sun 15 Sep, 01:15 PM</p>
                <p>Audi 3, Gold-CS</p>
              </div>
              <div className='text-center bg-orange-50 text-black font-semibold px-3 py-1 rounded-lg'>
                <p className='font-bold text-lg'>1</p>
                <p>Ticket</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className='px-5 py-3 rounded-lg bg-white w-full md:w-[30%] h-fit'>
          <div className='mb-6'>
            <div className='flex justify-between items-center'>
              <p className='text-lg font-bold'>Booking Summary</p>
              <p className='text-gray-500'>Details</p>
            </div>
            <div className='flex justify-between items-center mt-4'>
              <p>1 Ticket</p>
              <p>Rs 150</p>
            </div>
            <div className='flex justify-between items-center mt-2'>
              <p>Tax and Fees</p>
              <p>Rs 29</p>
            </div>
          </div>
          <hr />
          <div className='my-6'>
            <p className='text-lg font-semibold'>Offers for you</p>
            <div className='flex mt-4 space-x-2'>
              <input
                type='text'
                placeholder='Enter promo code'
                className='border rounded w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
                Apply
              </button>
            </div>
            <p className='text-gray-500 mt-2'>
              View all offers or enter promo code
            </p>
          </div>
          <hr />
          <div className='my-6'>
            <div className='flex justify-between items-center'>
              <p className='text-lg font-bold'>Total</p>
              <p className='text-lg font-bold'>Rs 179</p>
            </div>
            <hr className='my-4' />
            <button className='w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-green-700'>
              Proceed to pay Rs 179
            </button>
            <p className='text-gray-500 text-sm text-center mt-2'>
              By clicking on proceed to pay, you agree to our terms and
              conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
