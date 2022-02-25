import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import PageTitle from '../../../components/PageTitle';
import RichTextEditor from '../../../components/RichTextEditor';

import LeftSide from './LeftSide';
import { emails } from './Data';

// Compose

function Compose(props) {
  const totalUnreadEmails = emails.filter((e) => e.is_read === false).length;
  const [newReplyContent, setnewReplyContent] = useState(null);
  const onEditorContentChange = (editorContent) => {
    setnewReplyContent(editorContent);
  };
  function handleSave(event, values) {
    console.log(values, newReplyContent);
  }
  return (
    <React.Fragment>
      <Row className='page-title'>
        <Col md={12}>
          <PageTitle
            breadCrumbItems={[
              { label: 'Apps', path: '/apps/email/compose' },
              { label: 'Email', path: '/apps/email/compose' },
              { label: 'Compose', path: '/apps/email/compose', active: true },
            ]}
            title={'Compose Email'}
          />
        </Col>
      </Row>

      <Row>
        <Col className='col-12'>
          <div className='email-container'>
            <Card className='inbox-leftbar'>
              <LeftSide totalUnreadEmails={totalUnreadEmails} />
            </Card>

            <div className='inbox-rightbar p-4'>
              <AvForm onValidSubmit={handleSave}>
                <AvField
                  type='email'
                  name='to'
                  placeholder='To'
                  label='To'
                  required
                ></AvField>
                <AvField
                  type='text'
                  name='subject'
                  label='Subject'
                  placeholder='Subject'
                  required
                ></AvField>

                <Row>
                  <Col>
                    <RichTextEditor
                      onEditorContentChange={onEditorContentChange}
                    />
                  </Col>
                </Row>
                <Row className='mt-3 text-right'>
                  <Col>
                    <Button color='primary'>
                      Send<i className='uil uil-message ml-2'></i>
                    </Button>
                  </Col>
                </Row>
              </AvForm>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Compose;
