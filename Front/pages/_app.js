import React from 'react';
import Proptypes from 'prop-types';
import 'antd/dist/antd.css';
import wrapper from '../store/configureStore';
import withReduxSaga from 'next-redux-saga';

const NodeBird = ({ Component }) => {
  return <Component />;
};

NodeBird.proptypes = {
  Component: Proptypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(NodeBird));
