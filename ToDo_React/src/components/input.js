import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { onInputChange} from '../actions/action';

const Input = ({ onInputChange, inputNameValue, }) => (
    <div>
      <input onChange={onInputChange} placeholder="Add task name..." value={inputNameValue} />
    </div>
);

Input.propTypes = {
  onInputChange: PropTypes.func,
  inputNameValue: PropTypes.string.isRequired,
  addTask: PropTypes.func
};

export default connect(
  state => ({
    inputNameValue: state.inputNameValue,
  }),
  { onInputChange }
)(Input);