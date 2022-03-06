// import { useEffect, useState } from 'react/cjs/react.production.min';
import { useEffect, useState } from 'react';
import url, { category, categoryTwo } from '../core/core';
import SubMenuOne from './SubMenuOne';

function PrimaryMenu({ clickData, updateClick }) {
  const [menu, setMenu] = useState(false);
  const [menuData, setMenuData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(category);

    return () => {
      setData([]);
    };
  }, []);

  const veiwSubMenu = (e) => {
    setMenu(true);
    setMenuData(e);
  };
  const closeMenu = () => {
    setMenu(false);
    setMenuData([]);
  };

  return (
    <>
      {' '}
      <div className='absolute left-0 top-0 z-10 w-[29%] xl:w-[16%] py-36 h-screen bg-white flex flex-col '>
        <div className='py-10 px-16 flex justify-between flex-row items-center '>
          <h3>Browse Category</h3>
          <div className='w-[18px] h-[18px] '>
            <span
              onClick={() => updateClick(!clickData)}
              className='relative block w-[100%] h-[100%] rounded-[50%] duration-500 ease-in-out cursor-pointer '
            >
              {' '}
              <span
                className={`hamburger absolute top-[50%] left-0 w-[100%] h-[2px] bg-black block origin-center duration-500 ease-in-out after:bg-black after:duration-500 after:ease-in-out after:w-full after:h-full  after:absolute before:absolute before:bg-black before:duration-500 before:ease-in-out before:w-full before:h-full  ${
                  clickData
                    ? ' rotate-45 after:rotate-90 after:bottom-0 before:rotate-90 before:top-0'
                    : 'after:bottom-[-8px] before:top-[-8px]'
                } `}
              ></span>
            </span>
          </div>
        </div>
        {data.map((item, index) => (
          <button
            key={index}
            onClick={() => veiwSubMenu(categoryTwo)}
            className='py-[7px] px-16 flex justify-between flex-row items-center active:bg-ash '
          >
            <div className='flex flex-row items-center'>
              <img
                src={`${url}/img/fashion.png`}
                alt=''
                className='w-30 h-30 mr-10 '
              />
              <h5 className='text-green font-semibold '>{item.title}</h5>
            </div>
            <i className='fa-solid fa-chevron-right'></i>
          </button>
        ))}
      </div>
      {menu && <SubMenuOne data={menuData} closed={closeMenu} />}
    </>
  );
}

export default PrimaryMenu;
