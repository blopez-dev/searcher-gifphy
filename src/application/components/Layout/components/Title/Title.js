import React from 'react';
import PropTypes from 'prop-types';

function Title({ type, content }) {
  const Tag = `h${type}`;

  return (
    <Tag>
      <span>{content}</span>
    </Tag>
  );
}

Title.propsTypes = {
  type: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired
};

export default Title;
