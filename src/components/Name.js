import React from 'react';
import PropTypes from 'prop-types';

function Name({ name, id, sex, onClick }) {
  return (<li
    onClick={() => onClick({ name, id, sex })}
    className={sex}
    key={id}>
    {name}
  </li>);
}

Name.defaultProps = {
  name: '',
  sex: ''
};

Name.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  sex: PropTypes.oneOf(['male', 'female', ''])
};

export default Name;
