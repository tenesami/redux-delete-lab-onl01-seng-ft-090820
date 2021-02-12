import React, { Component } from 'react';

class Band extends Component {

  render() {
    //console.log(this.props.band)

    return(
      <div>
        Band Component
        <ul>
          {this.props.band}
        </ul>
          
      </div>
    );
  }
};

export default Band;





