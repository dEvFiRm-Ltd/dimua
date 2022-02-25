import React from 'react';

function ProfileDashboard() {
  return (
    <>
      <div className='py-10 mx-14 border-b border-ash '>
        <h3 className='capitalize'>account information</h3>
      </div>
      <div className='mx-16'>
        {/* Form Group */}
        <div className=' mt-32 flex flex-col '>
          <h5 className='mb-24'>Personal information</h5>
          <div className='flex flex-row mb-16 justify-between items-center '>
            <label htmlFor='name'>
              {' '}
              <h5 className='font-normal capitalize'>Full name</h5>{' '}
            </label>
            <input
              type='text'
              name=''
              id='name'
              className='py-10 px-16 rounded border-inputColor w-[470px] '
            />
          </div>
          <div className='flex flex-row mb-16 justify-between items-center '>
            <label htmlFor='number'>
              {' '}
              <h5 className='font-normal capitalize'>Phone Number</h5>{' '}
            </label>
            <input
              type='text'
              name=''
              id='number'
              className='py-10 px-16 rounded border-inputColor w-[470px] '
            />
          </div>
          <div className='flex flex-row mb-16 justify-between items-center '>
            <label htmlFor='mail'>
              {' '}
              <h5 className='font-normal capitalize'>email</h5>{' '}
            </label>
            <input
              type='email'
              name=''
              id='mail'
              className='py-10 px-16 rounded border-inputColor w-[470px] '
            />
          </div>
        </div>
        {/* Form Group */}
        <div className=' mt-32 flex flex-col '>
          <h5 className='mb-24'>Delivery information</h5>
          <div className='flex flex-row mb-16 justify-between items-center '>
            <label htmlFor='name'>
              {' '}
              <h5 className='font-normal capitalize'>Full Address</h5>{' '}
            </label>
            <input
              type='text'
              name=''
              id='name'
              className='py-10 px-16 rounded border-inputColor w-[470px] '
            />
          </div>
          <div className='flex flex-row mb-16 justify-between items-center '>
            <label htmlFor='number'>
              {' '}
              <h5 className='font-normal capitalize'>City</h5>{' '}
            </label>
            <select className='py-10 px-16 rounded border-inputColor w-[470px] '>
              <option>Select City</option>
              <option>Select City</option>
              <option>Select City</option>
              <option>Select City</option>
              <option>Select City</option>
            </select>
          </div>
          <div className='flex flex-row mb-16 justify-between items-center '>
            <label htmlFor='number'>
              {' '}
              <h5 className='font-normal capitalize'>Post Office</h5>{' '}
            </label>
            <select className='py-10 px-16 rounded border-inputColor w-[470px] '>
              <option>Select City</option>
              <option>Select City</option>
              <option>Select City</option>
              <option>Select City</option>
              <option>Select City</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileDashboard;
