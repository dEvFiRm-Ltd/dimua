import React from 'react';

/**
 * Renders the preloader
 */
function PreLoaderWidget() {
  return (
    <div className='preloader'>
      <div className='status'>
        <div
          className='spinner-border avatar-sm text-primary m-2'
          role='status'
        ></div>
      </div>
    </div>
  );
}

export default PreLoaderWidget;
