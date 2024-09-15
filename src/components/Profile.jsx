import {
  IoChevronForward,
  IoBagOutline,
  IoSettingsOutline,
  IoGiftOutline,
} from 'react-icons/io5';
import { FaRegUserCircle } from 'react-icons/fa';
import {
  IoIosInformationCircleOutline,
  IoIosNotificationsOutline,
} from 'react-icons/io';
import { MdOutlineResetTv, MdOutlineCollectionsBookmark } from 'react-icons/md';
import { BsCreditCard2Front } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';

const Profile = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-items-end items-end bg-blue-gray-50'>
      <div>
        <div className='p-4 w-full h-full bg-white'>
          <div className='flex justify-between items-center mb-2'>
            <div>
              <p className='text-xl'>Hey!</p>
              <div className='flex items-center'>
                <p>Edit Profile</p>
                <IoChevronForward />
              </div>
            </div>
            <FaRegUserCircle className='text-4xl' />
          </div>
          <hr />
          <div className='flex items-center justify-between py-3'>
            <div className='flex items-center gap-4'>
              <IoIosInformationCircleOutline className='text-lg' />
              <div>
                <p>Get ticktes on Whatsapp/SMS!</p>
                <p className='text-[12px]  text-gray-700'>
                  Add your Mobile Number
                </p>
              </div>
            </div>
            <IoChevronForward />
          </div>

          <hr />
          <div className='flex items-center justify-between py-3'>
            <div className='flex items-center gap-4'>
              <IoIosNotificationsOutline className='text-lg' />
              <div>
                <p>Notifications</p>
              </div>
            </div>
            <IoChevronForward />
          </div>

          <hr />
          <div className='flex items-center justify-between py-3'>
            <div className='flex items-center gap-4'>
              <IoBagOutline className='text-lg' />
              <div>
                <p>Your Orders</p>
                <p className='text-[12px]  text-gray-700'>
                  View all your booking & purchases
                </p>
              </div>
            </div>
            <IoChevronForward />
          </div>

          <hr />
          <div className='flex items-center justify-between py-3'>
            <div className='flex items-center gap-4'>
              <MdOutlineResetTv className='text-lg' />
              <div>
                <p>Stream Libraay</p>
                <p className='text-[12px]  text-gray-700'>
                  Rented & Purchased Movies
                </p>
              </div>
            </div>
            <IoChevronForward />
          </div>

          <hr />
          <div className='flex items-center justify-between py-3'>
            <div className='flex items-center gap-4'>
              <BsCreditCard2Front className='text-lg' />
              <div>
                <p>Play Credit Card</p>
                <p className='text-[12px]  text-gray-700'>
                  View your Play Credit Card details and offers
                </p>
              </div>
            </div>
            <IoChevronForward />
          </div>

          <hr />
          <div className='flex items-center justify-between py-3'>
            <div className='flex items-center gap-4'>
              <AiOutlineMessage className='text-lg' />
              <div>
                <p>Help & Support</p>
                <p className='text-[12px] text-gray-700'>
                  View commonly asked queries and Chat
                </p>
              </div>
            </div>
            <IoChevronForward />
          </div>

          <hr />
          <div className='flex items-center justify-between py-3'>
            <div className='flex items-center gap-4'>
              <IoSettingsOutline className='text-lg' />
              <div>
                <p>Account & Settings</p>
                <p className='text-[12px] text-gray-700'>
                  Location,Payments,Permissions & More
                </p>
              </div>
            </div>
            <IoChevronForward />
          </div>

          <hr />
          <div className='flex items-center justify-between py-3'>
            <div className='flex items-center gap-4'>
              <IoGiftOutline className='text-lg' />
              <div>
                <p>Rewards</p>
                <p className='text-[12px] text-gray-700'>
                  View your rewards & unlock new ones
                </p>
              </div>
            </div>
            <IoChevronForward />
          </div>

          <hr />
          <div className='flex items-center justify-between py-3'>
            <div className='flex items-center gap-4'>
              <MdOutlineCollectionsBookmark className='text-lg' />
              <div>
                <p>BookASmile</p>
              </div>
            </div>
            <IoChevronForward />
          </div>
          <hr />

          <div className=' bg-white py-6 mt-4'>
            <button className='text-primary border border-primary rounded-md py-3 w-full'>
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
