import React from 'react';
import Proptypes from 'prop-types';
import 'antd/dist/antd.css';
import wrapper from '../store/configureStore';

const NodeBird = ({ Component }) => {
  return <Component />;
};

NodeBird.proptypes = {
  Component: Proptypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
