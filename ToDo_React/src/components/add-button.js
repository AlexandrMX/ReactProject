import React, { Component } from 'react';
import { addTask } from '../actions/action';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styler from './add-button.component.css'

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputNameValue: props.inputNameValue,
            inputTaskValue: props.inputTaskValue
        };
    }
    render() {
        return (
            <button className={styler.add_task_btn} onClick={() => 
                { this.props.addTask(this.props.inputNameValue, this.props.inputTaskValue) }}>
                    {this.props.title}
            </button>
        )
    }
};
Button.propTypes = {
    inputNameValue: PropTypes.string.isRequired,
    inputTaskValue: PropTypes.string.isRequired,
    addTask: PropTypes.func
};

export default connect(
    state => ({
        inputNameValue: state.inputNameValue,
        inputTaskValue: state.inputTaskValue
    }),
    { addTask }
)(Button);




