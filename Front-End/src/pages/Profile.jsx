import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileSidebar from '../components/UserPanel/ProfileSidebar';

function Profile() {
  return (
    <section className='container my-0 py-16 flex flex-row'>
      <div className='w-1/3 bg-white py-[23px] mr-8 rounded-lg '>
        <ProfileSidebar />
      </div>
      <div className='w-2/3 ml-8 rounded-lg bg-white'>
        <Outlet />
      </div>
    </section>
  );
}

export default Profile;
