import React from 'react';

function Location({ data, type, classes }) {
  return (
    <div className={`flex flex-row ${classes} relative`}>
      <input type={type} name={data} id={data} className='hidden peer' />
      <span className='absolute left-0 top-[3px] border border-solid border-[#dddddd] w-[18px] h-[18px] bg-white '></span>
      <span className='absolute left-[5px] top-8 border border-solid border-[#dddddd] transition-all ease-in-out w-8 h-8 bg-green scale-0 opacity-0 peer-checked:scale-[1] peer-checked:opacity-[1] '></span>
      <label className='pl-[27px] capitalize' htmlFor={data}>
        {data}
      </label>
    </div>
  );
}

export default Location;
