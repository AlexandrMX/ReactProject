import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem, checkItem } from '../actions/action';
import styler from './list-item-titles.component.css'

const ListItemTitles = () => {
    return (
        <div className={styler.item_container}>
            <span className={styler.del_btn_title}>Delete</span>
            <li className={styler.task_name_title}>Task name</li>
            <li className={styler.task_title}>Task</li>
            <li className={styler.task_date}>Date</li>
        </div >
    );
};


export default ListItemTitles;