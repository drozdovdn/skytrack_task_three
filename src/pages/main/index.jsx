import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from './actions';
import './style.less';
import Loading from '../../components/loading';


class Main extends Component{

  static propTypes = {
    getImages: PropTypes.func.isRequired,
  };

  render() {
    const { url } = this.props.image;
    return (
      <div className="main">
        <h1 className="main__title">Загрузите новое изображение</h1>
        <button onClick={this.props.getImages} className="main__download">Загрузить</button>
        <div className="main__content">
          {
            this.props.loading ? <Loading /> : <img src={ url } alt=""/>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    image: state.app.image,
    loading: state.app.loading
  }
};

export default connect(mapStateToProps, Actions)(Main)