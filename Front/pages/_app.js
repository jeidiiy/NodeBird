import React from 'react';
import Proptypes from 'prop-types';
import 'antd/dist/antd.css';
import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/configureStore';

const NodeBird = ({ Component }) => <Component />;

NodeBird.propTypes = {
  Component: Proptypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(NodeBird));
