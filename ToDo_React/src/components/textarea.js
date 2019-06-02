import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { onInputTaskChange } from '../actions/action';
import styler from './input.component.css'

const Textarea = ({ onInputTaskChange, inputTaskValue }) => (
        <div>
            <textarea className={styler.task_input} onChange={onInputTaskChange} 
            placeholder="Add task..." value={inputTaskValue} />
        </div>
);

Textarea.propTypes = {
    onInputTaskChange: PropTypes.func,
    inputTaskValue: PropTypes.string.isRequired,
};

export default connect(
    state => ({
        inputTaskValue: state.inputTaskValue
    }),
    { onInputTaskChange }
)(Textarea);