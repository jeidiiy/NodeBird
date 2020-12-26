import React from 'react';
import Proptypes from 'prop-types';
import 'antd/dist/antd.css';

const NodeBird = ({ Component }) => {
  return <Component />;
};

NodeBird.proptypes = {
  Component: Proptypes.elementType.isRequired,
};

export default NodeBird;
