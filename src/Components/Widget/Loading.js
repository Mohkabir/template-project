import React from 'react';
import loading from '../../Asset/images/load-loading.gif';


const Loading = () => {
  return <div style={{ textAlign: 'center'}}>
    <img src={loading} alt="loading" />
  </div>;
};

export default Loading;
