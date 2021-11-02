import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content, addItemState } = props
  return (
    <div className="Item" onClick={ () => addItemState(content) }>
      {content}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
}
