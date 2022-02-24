import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { XCircle } from 'react-feather';

const RightSideBar = ({ title = 'Right Sidebar' }, props) => {
  let rightBarNodeRef = useRef(null);
  const component = props.children || null;

  /**
   * Handles the close
   */
  const handleClose = (e) => {
    e.preventDefault();
    hide();
  };

  /**
   * Hide rightside bar
   */
  function hide() {
    document.body.classList.remove('right-bar-enabled');
  }
  useEffect(() => {
    document.addEventListener(
      'mousedown',
      (e) => {
        if (rightBarNodeRef.contains(e.target)) return;
        hide();
      },
      false
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        (e) => {
          if (rightBarNodeRef.contains(e.target)) return;
          hide();
        },
        false
      );
    };
  }, []);

  return (
    <React.Fragment>
      <div className='right-bar' ref={(node) => (rightBarNodeRef = node)}>
        <div className='rightbar-title'>
          <Link
            to='#'
            className='right-bar-toggle float-right'
            onClick={handleClose}
          >
            <XCircle />
          </Link>
          <h5 className='m-0'>{title}</h5>
        </div>
        <PerfectScrollbar>{component}</PerfectScrollbar>
      </div>
      <div className='rightbar-overlay'></div>
    </React.Fragment>
  );
};

export default connect()(RightSideBar);
