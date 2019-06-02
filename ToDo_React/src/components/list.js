import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListItem from './list-item';
import ListItemTitle from './list-item-titles';


const List = ({ items }) => (
  <ul>
    <ListItemTitle />
    {items.map((item, index) => (
      <ListItem key={`list-item-${index}`} item={item} />
    ))}
  </ul>
);

List.propTypes = {
  items: PropTypes.array
};

export default connect(state => ({
  items: state.items
}))(List);