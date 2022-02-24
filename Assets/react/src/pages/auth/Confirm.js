import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { Container, Row, Col, Card, CardBody } from 'reactstrap';

import { isUserAuthenticated } from '../../helpers/authUtils';
import logo from '../../assets/images/logo.png';

const Confirm = (props) => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.classList.add('authentication-bg');

    return () => {
      setMounted(false);
      document.body.classList.remove('authentication-bg');
    };
  }, []);

  const renderRedirectToRoot = () => {
    const isAuthTokenValid = isUserAuthenticated();
    if (isAuthTokenValid) {
      return <Redirect to='/' />;
    }
  };

  const isAuthTokenValid = isUserAuthenticated();
  return (
    <React.Fragment>
      {renderRedirectToRoot()}

      {(isMounted || !isAuthTokenValid) && (
        <div className='account-pages my-5'>
          <Container>
            <Row className='justify-content-center'>
              <Col md={8} lg={6} xl={5}>
                <Card className='text-center'>
                  <CardBody className='p-4'>
                    <div className='mx-auto mb-5'>
                      <a href='/'>
                        <img src={logo} alt='' height='24' />
                        <h3 className='d-inline align-middle ml-1 text-logo'>
                          Shreyu
                        </h3>
                      </a>
                    </div>

                    <h6 className='h5 mb-0 mt-4'>Confirm your email</h6>
                    <p className='text-muted mt-3 mb-3'>
                      Your account has been successfully registered. To complete
                      the verification process, please check your email for a
                      validation request.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row className='mt-3'>
              <Col className='text-center'>
                <p className='text-muted'>
                  Return to{' '}
                  <Link
                    to='/account/login'
                    className='text-primary font-weight-bold ml-1'
                  >
                    Login
                  </Link>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </React.Fragment>
  );
};

export default connect()(Confirm);
