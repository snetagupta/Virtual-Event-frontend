import React from 'react';
import ProfileHeader from './ProfileHeader';
import MenuItem from './MenuItem';
import SignOutButton from './SignOutButton';
import {
  IoChevronForward,
  IoBagOutline,
  IoSettingsOutline,
  IoGiftOutline,
} from 'react-icons/io5';
import {
  IoIosInformationCircleOutline,
  IoIosNotificationsOutline,
} from 'react-icons/io';
import { MdOutlineResetTv, MdOutlineCollectionsBookmark } from 'react-icons/md';
import { BsCreditCard2Front } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';

const menuItems = [
  {
    icon: <IoIosInformationCircleOutline className='text-lg' />,
    title: 'Get tickets on Whatsapp/SMS!',
    description: 'Add your Mobile Number',
  },
  {
    icon: <IoIosNotificationsOutline className='text-lg' />,
    title: 'Notifications',
  },
  {
    icon: <IoBagOutline className='text-lg' />,
    title: 'Your Orders',
    description: 'View all your booking & purchases',
  },
  {
    icon: <MdOutlineResetTv className='text-lg' />,
    title: 'Stream Library',
    description: 'Rented & Purchased Movies',
  },
  {
    icon: <BsCreditCard2Front className='text-lg' />,
    title: 'Play Credit Card',
    description: 'View your Play Credit Card details and offers',
  },
  {
    icon: <AiOutlineMessage className='text-lg' />,
    title: 'Help & Support',
    description: 'View commonly asked queries and Chat',
  },
  {
    icon: <IoSettingsOutline className='text-lg' />,
    title: 'Account & Settings',
    description: 'Location, Payments, Permissions & More',
  },
  {
    icon: <IoGiftOutline className='text-lg' />,
    title: 'Rewards',
    description: 'View your rewards & unlock new ones',
  },
  {
    icon: <MdOutlineCollectionsBookmark className='text-lg' />,
    title: 'BookASmile',
  },
];

const ProfileMenuList = () => {
  return (
    <div className='h-screen w-full flex flex-col bg-blue-gray-50'>
      <div className='p-4 w-full h-full bg-white'>
        <ProfileHeader />
        <hr />
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <MenuItem
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
            <hr />
          </React.Fragment>
        ))}
        <SignOutButton />
      </div>
    </div>
  );
};

export default ProfileMenuList;
