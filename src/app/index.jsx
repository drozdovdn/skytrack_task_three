import React, {Component} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import * as Actions from './actions';
import Header from '../components/header';
import ClientRoutes from '../routing/client-routes';
import './style.less';
class App extends Component{

  static propTypes = {

  };

  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <ClientRoutes />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
};

export default connect(mapStateToProps, Actions)(App);
