import React from 'react';
import url from '../components/core/core';

function CompanyInformation() {
  return (
    <div className='container flex flex-wrap flex-row mt-16'>
      <div className='w-1/2 pr-8'>
        <div className='bg-white rounded-lg px-16 py-13 flex flex-col '>
          <div className='flex flex-row justify-start'>
            <img
              src={`${url}/img/location.svg`}
              alt=''
              className=' mr-[8.60px]'
            />
            <h3 className='font-normal'> Company Name </h3>
          </div>
          <div className='mt-12 ml-[26px] flex flex-col '>
            <h5>Lô 202 - Khu công nghiệp Bắc Ninh</h5>
            <h5 className='font-normal'>97-99 Láng Hạ, Đống Đa, Hà Nội</h5>
          </div>
        </div>
      </div>
      <div className='w-1/2 pl-8'>
        <div className='bg-white rounded-lg py-[29px] flex flex-col '>
          <div className='flex flex-row justify-around'>
            <div className='text-center'>
              <h2 className='text-green mb-4'>90%</h2>
              <p className=''>On-time application rate</p>
            </div>
            <div className='text-center'>
              <h2 className='text-green mb-4'>15K</h2>
              <p className=''>Number of orders sold</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInformation;
