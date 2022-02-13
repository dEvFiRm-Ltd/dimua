import React from 'react';
import { Link } from 'react-router-dom';

function FlashItem() {
  return (
    <Link to={`/`} className='p-16 bg-white rounded-lg block '>
      FlashItem
    </Link>
  );
}

export default FlashItem;
