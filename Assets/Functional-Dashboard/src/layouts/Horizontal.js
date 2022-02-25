import React, { Suspense, useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

import { changeLayout } from '../redux/actions';
import * as layoutConstants from '../constants/layout';

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import('../components/Topbar'));
const Navbar = React.lazy(() => import('../components/Navbar'));
const Footer = React.lazy(() => import('../components/Footer'));
const loading = () => <div className='text-center'></div>;

const HorizontalLayout = (props) => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    props.changeLayout(layoutConstants.LAYOUT_HORIZONTAL);
  }, [props]);

  /**
   * Opens the menu - mobile
   */
  const openMenu = (e) => {
    e.preventDefault();
    setMenuOpened(!isMenuOpened);
  };
  const children = props.children || null;

  return (
    <div id='wrapper'>
      <Suspense fallback={loading()}>
        <Topbar openLeftMenuCallBack={openMenu} {...props} />
      </Suspense>
      <Suspense fallback={loading()}>
        <Navbar isMenuOpened={isMenuOpened} {...props} />
      </Suspense>

      <div className='content-page'>
        <div className='content'>
          <Container fluid>
            <Suspense fallback={loading()}>{children}</Suspense>
          </Container>
        </div>

        <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    layout: state.Layout,
    user: state.Auth.user,
  };
};
export default connect(mapStateToProps, { changeLayout })(HorizontalLayout);
