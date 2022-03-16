import React from 'react';

function Modal({ view, setView }) {
  return (
    <section
      className={`fixed top-0 left-0 w-full h-full z-10 bg-black/50 flex duration-500 transition-all justify-center items-center ${
        view ? ' visible opacity-100' : 'invisible opacity-0 '
      } `}
    >
      <div
        className={`w-[375px] py-[21px] bg-white rounded-xl flex flex-col duration-300 transition-all ${
          view ? ' scale-100 delay-200' : 'scale-0 '
        } `}
      >
        <h1 className=' text-center leading-120 px-16 pb-16 border-b border-[#ebebeb] '>
          20% off product price
        </h1>
        <div className='flex flex-col w-full px-16 border-b border-[#ebebeb] '>
          <div className='flex flex-row w-full py-16 last:pt-0 justify-between '>
            <div className='w-1/2 block text-left'>
              <h5 className='capitalize font-normal '>code</h5>
            </div>
            <div className='w-1/2 block text-left'>
              <h3 className='capitalize text-green '>asadsvda616</h3>
            </div>
          </div>
          <div className='flex flex-row w-full py-16 last:pt-0 justify-between '>
            <div className='w-1/2 block text-left'>
              <h5 className='capitalize font-normal '>Expirey</h5>
            </div>
            <div className='w-1/2 block text-left'>
              <h3 className='capitalize '>12/22/09</h3>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full '>
          <div className='p-16 '>
            <h5 className='capitalize font-normal '>Condition Apply</h5>
          </div>
          <div className=' px-[9px] pb-24'>
            <div className='relative pl-12 py-[7px] first:pt-0 last:pb-0 '>
              <h5 className='font-normal'>
                20% off product price for orders from 50,000 VND.
              </h5>
              <span className='absolute w-4 h-4 bg-black top-1/2 left-[2px] '></span>
            </div>
            <div className='relative pl-12 py-[7px] first:pt-0 last:pb-0 '>
              <h5 className='font-normal'>
                20% off product price for orders from 50,000 VND.
              </h5>
              <span className='absolute w-4 h-4 bg-black top-1/2 left-[2px] '></span>
            </div>
            <div className='relative pl-12 py-[7px] first:pt-0 last:pb-0 '>
              <h5 className='font-normal'>
                20% off product price for orders from 50,000 VND.
              </h5>
              <span className='absolute w-4 h-4 bg-black top-1/2 left-[2px] '></span>
            </div>
          </div>
          <div className='px-16'>
            <button
              type='button'
              onClick={() => setView(false)}
              className='btnGreen w-full capitalize '
            >
              {' '}
              confirm{' '}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modal;
