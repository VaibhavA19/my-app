import React from 'react';


function Names(props) {
  return (
    <ul>
      { props.names.map(({name,id,sex},_index) => 
                                 (<li 
                                     onClick={()=> props.onClick({name,id,sex})}
                                     className={sex}
                                     key={id}>
                                    {name}
                                  </li>)) }
    </ul>
  );
}
export default Names ;
