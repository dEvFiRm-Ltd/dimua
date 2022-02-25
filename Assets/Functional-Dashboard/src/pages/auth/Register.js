import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Label,
  FormGroup,
  Button,
  Alert,
  InputGroup,
  InputGroupAddon,
  CustomInput,
} from 'reactstrap';
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
} from 'availity-reactstrap-validation';
import { Mail, Lock, User } from 'react-feather';

import { registerUser } from '../../redux/actions';
import { isUserAuthenticated } from '../../helpers/authUtils';
import Loader from '../../components/Loader';
import logo from '../../assets/images/logo.png';

const Register = (props) => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.classList.add('authentication-bg');

    return () => {
      setMounted(false);
      document.body.classList.remove('authentication-bg');
    };
  }, []);

  /**
   * Handles the submit
   */
  const handleValidSubmit = (event, values) => {
    props.registerUser(values.fullname, values.email, values.password);
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

  /**
   * Redirect to confirm
   */
  const renderRedirectToConfirm = () => {
    return <Redirect to='/account/confirm' />;
  };

  const isAuthTokenValid = isUserAuthenticated();
  return (
    <React.Fragment>
      {renderRedirectToRoot()}

      {Object.keys(props.user || {}).length > 0 && renderRedirectToConfirm()}

      {(isMounted || !isAuthTokenValid) && (
        <div className='account-pages mt-5 mb-5'>
          <Container>
            <Row className='justify-content-center'>
              <Col xl={10}>
                <Card className=''>
                  <CardBody className='p-0'>
                    <Row>
                      <Col md={6} className='p-5 position-relative'>
                        {/* preloader */}
                        {props.loading && <Loader />}

                        <div className='mx-auto mb-5'>
                          <a href='/'>
                            <img src={logo} alt='' height='24' />
                            <h3 className='d-inline align-middle ml-1 text-logo'>
                              Shreyu
                            </h3>
                          </a>
                        </div>

                        <h6 className='h5 mb-0 mt-4'>Welcome back!</h6>
                        <p className='text-muted mt-1 mb-4'>
                          Enter your email address and password to access admin
                          panel.
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
                            <Label for='fullname'>Username</Label>
                            <InputGroup>
                              <InputGroupAddon addonType='prepend'>
                                <span className='input-group-text'>
                                  <User className='icon-dual' />
                                </span>
                              </InputGroupAddon>
                              <AvInput
                                type='text'
                                name='fullname'
                                id='fullname'
                                placeholder='Shreyu N'
                                required
                              />
                            </InputGroup>

                            <AvFeedback>This field is invalid</AvFeedback>
                          </AvGroup>
                          <AvGroup className=''>
                            <Label for='email'>Email</Label>
                            <InputGroup>
                              <InputGroupAddon addonType='prepend'>
                                <span className='input-group-text'>
                                  <Mail className='icon-dual' />
                                </span>
                              </InputGroupAddon>
                              <AvInput
                                type='email'
                                name='email'
                                id='email'
                                placeholder='hello@coderthemes.com'
                                required
                              />
                            </InputGroup>

                            <AvFeedback>This field is invalid</AvFeedback>
                          </AvGroup>

                          <AvGroup className='mb-3'>
                            <Label for='password'>Password</Label>
                            <InputGroup>
                              <InputGroupAddon addonType='prepend'>
                                <span className='input-group-text'>
                                  <Lock className='icon-dual' />
                                </span>
                              </InputGroupAddon>
                              <AvInput
                                type='password'
                                name='password'
                                id='password'
                                placeholder='Enter your password'
                                required
                              />
                            </InputGroup>
                            <AvFeedback>This field is invalid</AvFeedback>
                          </AvGroup>

                          <AvGroup check className='mb-4'>
                            <CustomInput
                              type='checkbox'
                              id='terms'
                              defaultChecked='true'
                              className='pl-1'
                              label='I accept Terms and Conditions'
                            />
                          </AvGroup>

                          <FormGroup className='form-group mb-0 text-center'>
                            <Button color='primary' className='btn-block'>
                              Sign Up
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
                <p className='text-muted'>
                  Already have an account?{' '}
                  <Link
                    to='/account/login'
                    className='text-primary font-weight-bold ml-1'
                  >
                    Sign In
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

const mapStateToProps = (state) => {
  const { user, loading, error } = state.Auth;
  return { user, loading, error };
};

export default connect(mapStateToProps, { registerUser })(Register);
