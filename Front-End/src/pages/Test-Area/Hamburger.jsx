import React, { useState } from 'react';
import './hamburger.css';

function Hamburger() {
  const [click, setClick] = useState(false);

  return (
    <>
      <span
        onClick={() => setClick(!click)}
        className='relative block w-[24px] h-[24px] rounded-[50%] duration-500 ease-in-out cursor-pointer '
      >
        {' '}
        <span
          className={`hamburger absolute top-[50%] left-[0] w-[100%] h-[2px] bg-white block origin-center duration-500 ease-in-out after:bg-white after:duration-500 after:ease-in-out after:w-full after:h-full  after:absolute before:absolute before:bg-white before:duration-500 before:ease-in-out before:w-full before:h-full  ${
            click === true
              ? ' rotate-45 after:rotate-90 after:bottom-[0] before:rotate-90 before:top-[0]'
              : 'after:bottom-[-8px] before:top-[-8px]'
          } `}
        ></span>
      </span>
    </>
  );
}

export default Hamburger;
