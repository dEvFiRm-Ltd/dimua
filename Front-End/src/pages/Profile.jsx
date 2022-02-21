import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import url from '../components/core/core';

function Profile() {
  return (
    <section className='container m-0 py-16 flex flex-row'>
      <div className='w-1/3 bg-white py-[23px] mr-8 rounded-lg '>
        <div className='flex flex-row p-16'>
          <div className='flex w-[80px] flex-col items-center mr-8 '>
            <img
              src={`${url}/img/profile.png`}
              alt=''
              className=' w-[64px] h-[64px]  '
            />
            <button className=' btnWhite py-4 w-full border-ash rounded-lg '>
              Upload
            </button>
          </div>
          <div className='mt-[7px] flex-col '>
            <h5 className='mb-4'>Ronald Richards</h5>
            <h4 className='font-normal'>Thành viên từ: 10/12/2021</h4>
          </div>
        </div>
        <div className='flex flex-col pt-16'>
          <Link
            to=''
            className='w-full py-10 px-16 mb-4 flex flex-row items-center transition hover:bg-ash '
          >
            <img
              src={`${url}/img/icon.png`}
              alt=''
              className='w-20 h-20 mr-8'
            />{' '}
            Account Information
          </Link>
          <Link
            to=''
            className='w-full py-10 px-16 mb-4 flex flex-row items-center transition hover:bg-ash '
          >
            <img
              src={`${url}/img/icon.png`}
              alt=''
              className='w-20 h-20 mr-8'
            />{' '}
            Billing Information
          </Link>
          <Link
            to=''
            className='w-full py-10 px-16 mb-4 flex flex-row items-center transition hover:bg-ash '
          >
            <img
              src={`${url}/img/icon.png`}
              alt=''
              className='w-20 h-20 mr-8'
            />{' '}
            My Orders
          </Link>
          <Link
            to=''
            className='w-full py-10 px-16 mb-4 flex flex-row items-center transition hover:bg-ash '
          >
            <img
              src={`${url}/img/icon.png`}
              alt=''
              className='w-20 h-20 mr-8'
            />{' '}
            Ratings &amp; Reviews
          </Link>
        </div>
      </div>
      <div className='w-2/3 ml-8 rounded-lg bg-white'>
        <Outlet />
      </div>
    </section>
  );
}

export default Profile;
