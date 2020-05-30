import React, { Component } from 'react';
import { connect } from 'react-redux';

class History extends Component{
  render() {
    return (
        <div>
          <h1>History</h1>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
};

export default connect(mapStateToProps)(History)