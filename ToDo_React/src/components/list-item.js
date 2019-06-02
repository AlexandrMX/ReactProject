import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem, checkItem } from '../actions/action';
import styler from './list-item.component.css'

const ListItem = ({ item, dispatch }) => {
  const onRemoveItem = () => dispatch(removeItem(item));

  const onCheckItem = () => dispatch(checkItem(item));

  return (
    <div className={styler.item_container}>
       <button onClick={onRemoveItem}>X</button>
    <li
      style={{
        textDecoration: item.done ? 'line-through' : '',
        cursor: 'pointer'
      }}
    >
      <span onClick={onCheckItem}>{item.name}</span>{' '}
     
    </li>
    </div>
  );
};

ListItem.propTypes = {
  item: PropsTypes.object,
  dispatch: PropsTypes.func
};

export default connect()(ListItem);