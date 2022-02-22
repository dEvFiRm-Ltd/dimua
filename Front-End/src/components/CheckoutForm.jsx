import React from 'react';

function CheckoutForm() {
  return (
    <div className='flex-wrap w-[50%] pr-6 '>
      <div className='flex flex-col w-full h-[950px] p-24 bg-white overflow-y-scroll '>
        <div className='mb-16 flex justify-start items-center '>
          <h2 className='leading-150 font-semibold'>Buyer Information</h2>
        </div>
        {/* form-group  */}
        <div className='mb-16 flex flex-col justify-start '>
          <label className='form-label' htmlFor='name'>
            Your Name <span className='text-red'>*</span>{' '}
          </label>
          <input
            type={'text'}
            id='name'
            name='fullName'
            className='w-full py-10 pl-16 pr-8 rounded mt-8 '
            placeholder='Please enter your name'
          />
        </div>
        {/* form-group  */}
        <div className='mb-16 flex flex-col justify-start '>
          <label className='form-label' htmlFor='name'>
            Phone Number <span className='text-red'>*</span>{' '}
          </label>
          <input
            type={'text'}
            id='name'
            name='fullName'
            className='w-full py-10 pl-16 pr-8 rounded mt-8 appearance-none '
            placeholder='Please enter your name'
          />
        </div>
        {/* form-group  */}
        <div className='mb-16 flex flex-col justify-start '>
          <label className='form-label' htmlFor='name'>
            Detailed Address <span className='text-red'>*</span>{' '}
          </label>
          <input
            type={'text'}
            id='name'
            name='fullName'
            className='w-full py-10 pl-16 pr-8 rounded mt-8 appearance-none '
            placeholder='Please enter your name'
          />
        </div>
        {/* form-group  */}
        <div className='mb-16 flex flex-col justify-start '>
          <label className='form-label' htmlFor='name'>
            District <span className='text-red'>*</span>{' '}
          </label>
          <select className='w-full py-10 pl-16 pr-8 rounded mt-8 appearance-none bg-white border border-ash '>
            <option value='1'>Hanoi</option>
            <option value='1'>Hanoi</option>
            <option value='1'>Hanoi</option>
            <option value='1'>Hanoi</option>
          </select>
        </div>
        {/* form-group  */}
        <div className='mb-16 flex flex-col justify-start '>
          <label className='form-label' htmlFor='name'>
            City <span className='text-red'>*</span>{' '}
          </label>
          <select className='w-full py-10 pl-16 pr-8 rounded mt-8 appearance-none bg-white border border-ash '>
            <option value='1'>Hanoi</option>
            <option value='1'>Hanoi</option>
            <option value='1'>Hanoi</option>
            <option value='1'>Hanoi</option>
          </select>
        </div>
        {/* form-group  */}
        <div className='mb-16 flex flex-col justify-start '>
          <label className='form-label' htmlFor='name'>
            Police Station <span className='text-red'>*</span>{' '}
          </label>
          <select className='w-full py-10 pl-16 pr-8 rounded mt-8 appearance-none bg-white border border-ash '>
            <option value='1'>Hanoi</option>
            <option value='1'>Hanoi</option>
            <option value='1'>Hanoi</option>
            <option value='1'>Hanoi</option>
          </select>
        </div>
        <div className='mt-16 flex flex-col '>
          <div className='mb-8 flex flex-row '>
            <h5 className='leading-150 '>Total: </h5>{' '}
            <h2 className='leading-150 font-bold text-red'>1500$</h2>
          </div>
          <button className='w-full text-center py-12 btngreen '>
            {' '}
            Place Order{' '}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
