import React, { useState } from 'react';
import { Card, CardBody, Collapse, CardHeader, NavLink } from 'reactstrap';

const Accordions = (props) => {
  const [panel1, setPanel1] = useState(true);
  const panel2 = false;
  const panel3 = false;

  /**
   * Toggle panel
   */
  function togglePanel(panel) {
    setPanel1(!panel1);
  }

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <h5 className='header-title mb-3 mt-0'>Accordions Example</h5>

          <div id='accordion' className='accordion custom-accordionwitharrow'>
            <Card className='mb-1 shadow-none border'>
              <NavLink
                className='text-dark'
                id='group1'
                href='#'
                onClick={() => {
                  togglePanel('panel1');
                }}
              >
                <CardHeader className='p-1'>
                  <h5 className='m-0 font-size-16'>
                    What is Lorem Ipsum?
                    {panel1 && (
                      <i className='uil uil-angle-down float-right accordion-arrow'></i>
                    )}
                    {!panel1 && (
                      <i className='uil uil-angle-up float-right accordion-arrow'></i>
                    )}
                  </h5>
                </CardHeader>
              </NavLink>

              <Collapse isOpen={panel1}>
                <CardBody>This is first collapse content</CardBody>
              </Collapse>
            </Card>

            <Card className='mb-1 shadow-none border'>
              <NavLink
                className='text-dark'
                id='group2'
                href='#'
                onClick={() => {
                  togglePanel('panel2');
                }}
              >
                <CardHeader className='p-1'>
                  <h5 className='m-0 font-size-16'>
                    Why do we use it?
                    {panel2 && (
                      <i className='uil uil-angle-down float-right accordion-arrow'></i>
                    )}
                    {!panel2 && (
                      <i className='uil uil-angle-up float-right accordion-arrow'></i>
                    )}
                  </h5>
                </CardHeader>
              </NavLink>
              <Collapse isOpen={panel2}>
                <CardBody>This is second collapse content</CardBody>
              </Collapse>
            </Card>

            <Card className='mb-1 shadow-none border'>
              <NavLink
                className='text-dark'
                id='group3'
                href='#'
                onClick={() => {
                  togglePanel('panel3');
                }}
              >
                <CardHeader className='p-1'>
                  <h5 className='m-0 font-size-16'>
                    Where does it come from?
                    {panel3 && (
                      <i className='uil uil-angle-down float-right accordion-arrow'></i>
                    )}
                    {!panel3 && (
                      <i className='uil uil-angle-up float-right accordion-arrow'></i>
                    )}
                  </h5>
                </CardHeader>
              </NavLink>
              <Collapse isOpen={panel3}>
                <CardBody>This is third collapse content</CardBody>
              </Collapse>
            </Card>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default Accordions;
