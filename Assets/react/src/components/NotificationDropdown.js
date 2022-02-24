import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  UncontrolledTooltip,
} from 'reactstrap';
import { Bell } from 'react-feather';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const notificationContainerStyle = {
  maxHeight: '230px',
};

const NotificationDropdown = (props, { notifications = [] }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getRedirectUrl = (item) => {
    return `/notification/${item.id}`;
  };
  const tag = props.tag || 'div';
  return (
    <React.Fragment>
      <Dropdown
        isOpen={dropdownOpen}
        toggle={toggleDropdown}
        className='notification-list'
        tag={tag}
        id='notiDropdown'
      >
        <DropdownToggle
          data-toggle='dropdown'
          tag='a'
          className='nav-link dropdown-toggle'
          onClick={toggleDropdown}
          aria-expanded={dropdownOpen}
        >
          <Bell />
          <span className='noti-icon-badge'></span>
        </DropdownToggle>
        <DropdownMenu right className='dropdown-lg'>
          <div onClick={toggleDropdown}>
            <div className='dropdown-item noti-title border-bottom'>
              <h5 className='m-0 font-size-16'>
                <span className='float-right'>
                  <Link to='/notifications' className='text-dark'>
                    <small>Clear All</small>
                  </Link>
                </span>
                Notification
              </h5>
            </div>
            <PerfectScrollbar style={notificationContainerStyle}>
              {props.notifications.map((item, i) => {
                return (
                  <Link
                    to={getRedirectUrl(item)}
                    className='dropdown-item notify-item'
                    key={i + '-noti'}
                  >
                    <div className={`notify-icon bg-${item.bgColor}`}>
                      <i className={item.icon}></i>
                    </div>
                    <p className='notify-details'>
                      {item.text}
                      <small className='text-muted'>{item.subText}</small>
                    </p>
                  </Link>
                );
              })}
            </PerfectScrollbar>

            <Link
              to='/'
              className='dropdown-item text-center text-primary notify-item notify-all border-top'
            >
              View All
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown>

      <UncontrolledTooltip placement='left' target='notiDropdown'>
        {props.notifications.length} new unread notificationse
      </UncontrolledTooltip>
    </React.Fragment>
  );
};

export default NotificationDropdown;
