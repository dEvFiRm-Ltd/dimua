import { useEffect, useState } from 'react';
import { headerData } from '../core/core';

function Header() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setData(headerData);
    setCount(headerData.length - 1);

    return () => {
      setData([]);
      setCount(0);
    };
  }, []);

  return (
    <header className='container py-8 my-0 flex flex-row-reverse'>
      <ul className='features flex flex-row'>
        {data.map((data, i) => (
          <li className='relative py-7 px-10' key={i}>
            <h6>
              <span className='pr-6 h-[15px] inline-block mt-4 '>
                <img className='h-full mt-[2px]' src={data.icon} alt='' />
              </span>
              <span> {data.text} </span>
            </h6>
            {i !== count && (
              <span className='absolute w-4 h-4 rounded-[50%] top-1/2 right-[-2px] bg-[#000000] ' />
            )}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
