import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
const contents = [
  { img: `${process.env.PUBLIC_URL}/test/burger.jpg` },
  { img: `${process.env.PUBLIC_URL}/test/curry.jpg` },
  { img: `${process.env.PUBLIC_URL}/test/noodles.jpg` },
  { img: `${process.env.PUBLIC_URL}/test/pasta.jpg` },
  { img: `${process.env.PUBLIC_URL}/test/pizza.jpg` },
  { img: `${process.env.PUBLIC_URL}/test/steak.jpg` },
  // {img:}
];
export default function Playground() {
  const [data, setData] = useState([]);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  let slider1 = useRef(null);
  let slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
    setData(contents);
  }, []);

  const settingsOne = {
    asNavFor: nav2,
    fade: true,
    arrows: false,
    ref: (slider) => (slider1 = slider),
  };
  const settingsTwo = {
    asNavFor: nav1,
    slidesToShow: 6,
    focusOnSelect: true,
    variableWidth: true,
    className: 'itemSlide',
    ref: (slider) => (slider2 = slider),
  };

  return (
    <section className='container'>
      <Slider {...settingsOne}>
        {data.map((v, i) => (
          <div key={i} className=''>
            <img src={v.img} className='w-full h-full' alt='' />
          </div>
        ))}
      </Slider>
      <Slider {...settingsTwo}>
        {data.map((v, i) => (
          <div key={i} className='cursor-pointer mx-8 h-60'>
            <img src={v.img} className='w-full h-full' alt='' />
          </div>
        ))}
      </Slider>
    </section>
  );
}
