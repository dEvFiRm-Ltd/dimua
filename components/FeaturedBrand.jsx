import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FeaturedBrandData } from './core/core';
import SectionTitle from './partials/SectionTitle';

function FeaturedBrand() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setData(FeaturedBrandData);
    setCount(FeaturedBrandData.length - 1);
    return () => {
      setCount(0);
      setData([]);
    };
  }, []);

  return (
    <section className='container bg-white '>
      <SectionTitle title='Featured brand' slug='all-brands' />
      <div className='flex flex-row justify-center w-full px-12 py-16 '>
        {data.map((item, index) => (
          <Link href={'brand/1'} key={index}>
            <a
              className={` ${
                index === count ? '' : 'mr-[43px]'
              } w-[65px] h-[65px] relative `}
            >
              <Image
                layout='fill'
                src={`/img/brand.png`}
                alt=''
                className='h-full w-full '
              />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FeaturedBrand;
