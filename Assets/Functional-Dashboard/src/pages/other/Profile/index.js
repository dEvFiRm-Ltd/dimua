import React, { useState } from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import classNames from 'classnames';
import PageTitle from '../../../components/PageTitle';

import UserBox from './UserBox';
import Activities from './Activities';
import Messages from './Messages';
import Projects from './Projects';
import Tasks from './Tasks';
import Files from './Files';

const Profile = (props) => {
  const [activeTab, setactiveTab] = useState('1');

  function toggleTab(tab) {
    if (activeTab !== tab) {
      setactiveTab(tab);
    }
  }

  return (
    <React.Fragment>
      <Row className='page-title'>
        <Col md={12}>
          <PageTitle
            breadCrumbItems={[
              { label: 'Pages', path: '/pages/profile' },
              { label: 'Profile', path: '/pages/profile', active: true },
            ]}
            title={'Profile'}
          />
        </Col>
      </Row>

      <Row>
        <Col lg={3}>
          {/* User information */}
          <UserBox />
        </Col>

        <Col lg={9}>
          <Card>
            <CardBody>
              <Nav className='nav nav-pills navtab-bg nav-justified'>
                <NavItem>
                  <NavLink
                    href='#'
                    className={classNames({ active: activeTab === '1' })}
                    onClick={() => {
                      toggleTab('1');
                    }}
                  >
                    Activity
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href='#'
                    className={classNames({ active: activeTab === '2' })}
                    onClick={() => {
                      toggleTab('2');
                    }}
                  >
                    Messages
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href='#'
                    className={classNames({ active: activeTab === '3' })}
                    onClick={() => {
                      toggleTab('3');
                    }}
                  >
                    Projects
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href='#'
                    className={classNames({ active: activeTab === '4' })}
                    onClick={() => {
                      toggleTab('4');
                    }}
                  >
                    Tasks
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href='#'
                    className={classNames({ active: activeTab === '5' })}
                    onClick={() => {
                      toggleTab('5');
                    }}
                  >
                    Files
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId='1'>
                  <Activities />
                </TabPane>
                <TabPane tabId='2'>
                  <Messages />
                </TabPane>
                <TabPane tabId='3'>
                  <Projects />
                </TabPane>
                <TabPane tabId='4'>
                  <Tasks />
                </TabPane>
                <TabPane tabId='5'>
                  <Files />
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Profile;
