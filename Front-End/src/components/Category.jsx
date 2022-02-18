import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.production.min';
import { category } from './core/core';

function Category() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    setContent(category);

    return () => {
      setContent([]);
    };
  }, []);

  return (
    <section className='container py-16 bg-white'>
      <div className='flex flex-row justify-center'>
        {content.map((item, index) => (
          <Link
            to={`/${item.slug}`}
            key={index}
            className='w-[66px] mx-8 flex transition-all flex-col hover:bg-zinc-200 '
          >
            <div className='w-full h-[40px] '>
              <img src={item.icon} alt={item.slug} className='m-auto' />
            </div>
            <div className='w-full p-8 pb-0 text-center'>
              <p className='capitalize text-center font-semibold text-black '>
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Category;
