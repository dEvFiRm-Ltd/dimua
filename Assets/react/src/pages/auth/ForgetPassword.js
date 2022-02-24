import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
  Alert,
  Label,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
} from 'availity-reactstrap-validation';
import { Mail } from 'react-feather';

import { isUserAuthenticated } from '../../helpers/authUtils';
import Loader from '../../components/Loader';
import logo from '../../assets/images/logo.png';

const ForgetPassword = (props) => {
  let email;
  const [isMounted, setMounted] = useState(false);
  const [passwordResetSuccessful, setPasswordResetSuccessful] = useState(false);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setMounted(true);
    document.body.classList.add('authentication-bg');

    return () => {
      setMounted(false);
      document.body.classList.remove('authentication-bg');
    };
  }, []);

  /**
   * On error dismiss
   */
  function onDismiss() {
    setPasswordResetSuccessful(false);
  }

  /**
   * Handles the submit
   */
  const handleValidSubmit = (event, values) => {
    console.log(values);
    setLoading(true);

    // You can make actual api call to register here

    window.setTimeout(() => {
      setLoading(false);
      setPasswordResetSuccessful(true);
    }, 1000);
  };

  /**
   * Redirect to root
   */
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
              <Col xl={10}>
                <Card className=''>
                  <CardBody className='p-0'>
                    <Row>
                      <Col md={6} className='p-5 position-relative'>
                        {/* preloader */}
                        {isLoading && <Loader />}

                        <div className='mx-auto mb-5'>
                          <a href='/'>
                            <img src={logo} alt='' height='24' />
                            <h3 className='d-inline align-middle ml-1 text-logo'>
                              Shreyu
                            </h3>
                          </a>
                        </div>

                        <h6 className='h5 mb-0 mt-4'>Reset Password</h6>
                        <p className='text-muted mt-1 mb-4'>
                          Enter your email address and we'll send you an email
                          with instructions to reset your password.
                        </p>

                        {props.error && (
                          <Alert
                            color='danger'
                            isOpen={props.error ? true : false}
                          >
                            <div>{props.error}</div>
                          </Alert>
                        )}

                        <AvForm
                          onValidSubmit={handleValidSubmit}
                          className='authentication-form'
                        >
                          <AvGroup className=''>
                            <Label for='email'>Email Address</Label>
                            <InputGroup>
                              <InputGroupAddon addonType='prepend'>
                                <span className='input-group-text'>
                                  <Mail className='icon-dual' />
                                </span>
                              </InputGroupAddon>
                              <AvInput
                                type='text'
                                name='email'
                                id='email'
                                placeholder='hello@coderthemes.com'
                                value={email}
                                required
                              />
                            </InputGroup>

                            <AvFeedback>This field is invalid</AvFeedback>
                          </AvGroup>

                          <FormGroup className='form-group mb-0 text-center'>
                            <Button color='primary' className='btn-block'>
                              Submit
                            </Button>
                          </FormGroup>
                        </AvForm>
                      </Col>

                      <Col md={6} className='d-none d-md-inline-block'>
                        <div className='auth-page-sidebar'>
                          <div className='overlay'></div>
                          <div className='auth-user-testimonial'>
                            <p className='font-size-24 font-weight-bold text-white mb-1'>
                              I simply love it!
                            </p>
                            <p className='lead'>
                              "It's a elegent templete. I love it very much!"
                            </p>
                            <p>- Admin User</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row className='mt-1'>
              <Col className='col-12 text-center'>
                <p className='texttext-muted'>
                  Back to{' '}
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

export default connect()(ForgetPassword);
