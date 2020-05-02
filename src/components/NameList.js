import React from 'react';
import PropTypes from 'prop-types';
import Name from './Name.js';

function NameList({data,
                   onItemClick,
                   filterText}) {

  const filteredData = data
                        .filter(item => item.name.match(new RegExp("^".concat(filterText),"i")))
                        .map(item => (<Name 
                                            id={item.id} 
                                            sex={item.sex}
                                            name={item.name}
                                            onClick={onItemClick} />));

  return (
          <ul> 
            {filteredData}
          </ul>
         );
}

NameList.defaultProps = {
  data: [],
  onClick: () => {},
  filterText: '.*'
};

NameList.propTypes = {
  data: PropTypes.array,
  filterText: PropTypes.string,
  onClick: PropTypes.func
};

export default NameList;
