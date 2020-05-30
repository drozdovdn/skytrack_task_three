import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from './actions';
import './style.less'


class Pagination extends Component {

  static propTypes = {
    paginatePageAction: PropTypes.func.isRequired,
  };

  render(){
    const { postPerPage }  = this.props;
    const totalImages = this.props.images.length;

    const pageNumbers = [];
    for(let i=1; i<= Math.ceil(totalImages / postPerPage); i++) {
      pageNumbers.push(i);
    }
    const onClick = (evt) => {
      evt.preventDefault();
      const id = evt.target.id;
      this.props.paginatePageAction(id);
    };
    return (
      <nav className="pagination">
        <ul className="pagination__list">
          {
            pageNumbers.map( number => {
              return (
                <li className="pagination__link" key={number}>
                  <a  href="!#" onClick={onClick} id={number}>{ number }</a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    postPerPage: state.app.postPerPage,
    images: state.app.images
  }
};

export default connect(mapStateToProps, Actions)(Pagination);