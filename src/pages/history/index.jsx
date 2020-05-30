import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from './actions';
import './style.less';
import Pagination from '../../components/pagination';


class History extends Component{

  static propTypes = {
    delImageActions: PropTypes.func.isRequired,
  };

  render() {
    //Get current image
    const {currentPage, postPerPage, images} = this.props;
    const indexOfLastImage =  currentPage *  postPerPage;
    const indexOfFirstImage = indexOfLastImage - postPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage)

    const onClick = (evt) => {
      const id = evt.target.id;
      this.props.delImageActions(id);
    };

    return (
      <div className="history">
        <h1 className="history__title">Загруженные изображения</h1>
        <ul className="history__list">
          {
            currentImages.map( img => {
              return (
                <li key={ img.id } className="image">
                  <img src={ img.url } alt=""/>
                  <div className="image__title">Название: { img.title ? img.title : 'Нет названия =)' }</div>
                  <div className="image__date"> Время загрузки: { img.date }</div>
                  <button onClick={onClick} id={ img.id } className="image__button">Удалить</button>
                </li>
              )
            })
          }
        </ul>
        <Pagination />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.app.images,
    currentPage: state.app.currentPage,
    postPerPage: state.app.postPerPage,
  }
};

export default connect(mapStateToProps, Actions)(History)