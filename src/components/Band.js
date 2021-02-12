import React, { Component } from 'react';

class Band extends Component {

  render() {
    //console.log(this.props.band)

    return(
      <div>
        Band Component
        <li>
          {this.props.band}
        </li>
          
      </div>
    );
  }
};

export default Band;





