import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './input.css';
import { createDraftMessage, saveDraftMessage } from "../../lib/chat/actions";
import { Input, Button } from 'reactstrap';

const Inputs = ({ message, currentUserId, onChange, onSubmit }) => {
  return (
    <div className="Input">
      <form onSubmit={onSubmit()}>
        <Input
          onChange={onChange(currentUserId)}
          value={message.text}
          type="text"
          placeholder="Message.."
          autoFocus={true}
        />
        <Button color="primary">Send</Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: (userId) => (e) => dispatch(createDraftMessage(userId, e.currentTarget.value)),
    onSubmit: () => (e) => {
      e.preventDefault();
      dispatch(saveDraftMessage());
    }
  };

};


export default connect(null, mapDispatchToProps)(Inputs);