import React, { useEffect, useState } from 'react';
import { headerData } from '../core/core';

function Header() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(headerData);

    return () => {
      setData([]);
    };
  }, []);

  return (
    <header className='container py-8 my-0 flex flex-row-reverse'>
      <ul className='features flex flex-row'>
        {data.map((data, i) => (
          <li className='relative py-8 px-10' key={i}>
            <h6>
              <span className='pr-6 h-[15px] inline-block '>
                <img className='h-full mt-[2px]' src={data.icon} alt='' />
              </span>
              <span> {data.text} </span>
            </h6>
            <span className='absolute w-4 h-4 rounded-[50%] top-1/2 right-[-2px] bg-[#000000] ' />
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
