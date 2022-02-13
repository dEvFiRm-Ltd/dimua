import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const data = [
  {
    icon: `${process.env.PUBLIC_URL}/img/fashion.png`,
    title: 'Fashion Accessory',
    slug: 'fashion-accessory',
  },
  {
    icon: `${process.env.PUBLIC_URL}/img/care.png`,
    title: 'Fashion Accessory',
    slug: 'fashion-accessory',
  },
  {
    icon: `${process.env.PUBLIC_URL}/img/children.png`,
    title: 'Fashion Accessory',
    slug: 'fashion-accessory',
  },
  {
    icon: `${process.env.PUBLIC_URL}/img/equipment.png`,
    title: 'Fashion Accessory',
    slug: 'fashion-accessory',
  },
];

function Category() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    setContent(data);

    return () => {
      setContent([]);
    };
  }, []);

  return (
    <section className='container py-16 bg-white'>
      {content.map((item, index) => (
        <div className='flex flex-row justify-center'>
          <Link to={`/${item.slug}`} className='w-[66px] mx-8 flex flex-col'>
            <div className='w-full h-[40px] '>
              <img src={item.icon} alt={item.slug} className='m-auto' />
            </div>
            <div className='w-full p-8 text-center'>
              <p>{item.title}</p>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}

export default Category;
