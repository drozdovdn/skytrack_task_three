import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.less';

class Main extends Component{
  render() {
    return (
        <div className="main">
          <h1 className="main__title">Загрузите новое изображение</h1>
          <button className="main__download">Загрузить</button>
          <div className="main__content">
            <img src="https://media3.giphy.com/media/xT8qBvH64m71PALBWU/giphy.gif?cid=75f265f1f69815bb84f31e0e83ec82031495c0899f519736&rid=giphy.gif" alt=""/>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
};

export default connect(mapStateToProps)(Main)