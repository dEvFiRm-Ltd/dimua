import React, { useState } from 'react';
import {
  Card,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/* Chat Item Avatar */
const ChatItemAvatar = ({ userAvatar, postedOn }) => {
  return (
    <div className='chat-avatar'>
      <img src={userAvatar} alt={userAvatar} />
      <i>{postedOn}</i>
    </div>
  );
};

/* Chat Item Text */
const ChatItemText = ({ userName, text }) => {
  return (
    <div className='conversation-text'>
      <div className='ctext-wrap'>
        <i>{userName}</i>
        <p>{text}</p>
      </div>
    </div>
  );
};

/* Chat Item */
const chatItemDefaultProps = {
  placement: '',
  children: PropTypes.object,
  className: '',
};

const ChatItem = ({ children, placement, className }) => {
  return (
    <li
      className={classNames(
        'clearfix',
        { odd: placement === 'left' },
        className
      )}
    >
      {children}
    </li>
  );
};

ChatItem.defaultProps = chatItemDefaultProps;

/**
 * Renders the ChatList
 */

const ChatForm = ({ onNewMessagesPosted }) => {
  const handleValidMessageSubmit = (event, values) => {
    onNewMessagesPosted(values);
  };

  return (
    <AvForm
      onValidSubmit={handleValidMessageSubmit}
      className='needs-validation mt-2'
      noValidate
      name='chat-form'
      id='chat-form'
    >
      <Row form>
        <Col>
          <AvField
            name='text'
            type='text'
            errorMessage='Please enter your message'
            validate={{ required: { value: true } }}
          />
        </Col>
        <Col className='col-auto'>
          <button type='submit' className='btn btn-danger chat-send btn-block'>
            Send
          </button>
        </Col>
      </Row>
    </AvForm>
  );
};

/**
 * ChatList
 */

const ChatList = (props) => {
  const [messages, setMessages] = useState(props.messages);

  /**
   * save new message
   * @param {object} aurgh
   * From the Boss Baby😊
   */
  const handleNewMessagePosted = (aurgh) => {
    setMessages({
      messages: messages.concat({
        id: messages.length + 1,
        userName: 'Shreyu',
        text: aurgh.text,
        postedOn: '10:00',
      }),
    });
  };

  const height = props.height || '320px';
  return (
    <Card>
      <CardBody className='pt-2 pb-1'>
        <UncontrolledDropdown className='mt-2 float-right'>
          <DropdownToggle
            tag='button'
            className='btn btn-link arrow-none p-0 text-muted'
          >
            <i className='uil uil-ellipsis-v'></i>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <i className='uil uil-edit-alt mr-2'></i>Edit
            </DropdownItem>
            <DropdownItem>
              <i className='uil uil-exit mr-2'></i>Remove from Team
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem className='text-danger'>
              <i className='uil uil-trash mr-2'></i>Delete
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <h5 className='mb-4 header-title'>Recent Conversation</h5>

        <div className='chat-conversation'>
          <PerfectScrollbar style={{ maxHeight: height, width: '100%' }}>
            <ul className={classNames('conversation-list', props.className)}>
              {messages.map((message, i) => {
                return (
                  <ChatItem
                    key={i}
                    placement={i > 0 ? (i % 2 === 0 ? '' : 'left') : 'right'}
                  >
                    {message.userPic && (
                      <ChatItemAvatar
                        userAvatar={message.userPic}
                        postedOn={message.postedOn}
                      />
                    )}
                    <ChatItemText
                      userName={message.userName}
                      text={message.text}
                    />
                  </ChatItem>
                );
              })}
            </ul>
          </PerfectScrollbar>

          {/* chat form */}
          <ChatForm onNewMessagesPosted={handleNewMessagePosted} />
        </div>
      </CardBody>
    </Card>
  );
};

export default ChatList;
