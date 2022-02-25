import React, { useState } from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

const Modals = (props) => {
  const [modal, setModal] = useState(false);
  const [size, setSize] = useState();
  const [className, setClassName] = useState();
  const toggle = () => {
    setModal(!modal);
  };

  const openModalWithSize = (size) => {
    setSize(size);
    setClassName(null);
    toggle();
  };

  /**
   * Opens modal with custom class
   */
  const openModalWithClass = (className) => {
    setClassName(className);
    setSize(null);
    toggle();
  };

  return (
    <Row>
      <Col>
        <Card>
          <CardBody>
            <h4 className='mt-0 mb-1 header-title'>Modals</h4>

            <p className='sub-header'>
              A rendered modal with header, body, and set of actions in the
              footer.
            </p>

            <Row>
              <Col xl={4}>
                <h5 className='font-size-16 mb-3'>Examples</h5>
                <div className='button-list'>
                  <Button color='primary' onClick={toggle}>
                    Standard Modal
                  </Button>
                </div>
              </Col>
              <Col xl={4}>
                <h5 className='font-size-16 mb-3'>Modal sizes</h5>
                <div className='button-list'>
                  <Button
                    color='secondary'
                    onClick={() => openModalWithSize('xl')}
                  >
                    Extra large Modal
                  </Button>
                  <Button
                    color='success'
                    onClick={() => openModalWithSize('lg')}
                  >
                    Large Modal
                  </Button>
                  <Button color='info' onClick={() => openModalWithSize('sm')}>
                    Small Modal
                  </Button>
                </div>
              </Col>
              <Col xl={4}>
                <h5 className='font-size-16 mb-3'>Other exmaples</h5>
                <div className='button-list'>
                  <Button
                    color='warning'
                    onClick={() => openModalWithClass('modal-dialog-centered')}
                  >
                    Center
                  </Button>
                  <Button
                    color='secondary'
                    onClick={() =>
                      openModalWithClass('modal-dialog-scrollable')
                    }
                  >
                    Scrollable Modal
                  </Button>
                </div>
              </Col>
            </Row>

            <Modal
              isOpen={modal}
              toggle={toggle}
              className={className}
              size={size}
            >
              <ModalHeader toggle={toggle}>Modal title</ModalHeader>
              <ModalBody>
                <h6>Text in a modal</h6>
                <p>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </p>
                <hr />
                <h6>Overflowing text to show scroll behavior</h6>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>

                {className && className === 'modal-dialog-scrollable' && (
                  <React.Fragment>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                  </React.Fragment>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color='primary' onClick={toggle}>
                  Do Something
                </Button>
                <Button color='secondary' className='ml-1' onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Modals;
