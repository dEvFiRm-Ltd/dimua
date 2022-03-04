import url from '../core/core';

function SubMenuOne({ data, closed }) {
  return (
    <div className='absolute left-[305px] z-20 top-0 w-[280px] py-36 h-screen bg-white flex flex-col '>
      <button
        onClick={() => closed()}
        className='py-10 px-16 flex justify-between flex-row items-center '
      >
        <i className='fa-solid fa-chevron-left'></i>
        <h3>Back TO ... </h3>
      </button>
      {data.map((item, index) => (
        <button
          key={index}
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
  );
}

export default SubMenuOne;
