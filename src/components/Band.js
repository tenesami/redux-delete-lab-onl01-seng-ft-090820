import React, { Component } from 'react';

class Band extends Component {

  render() {
    //console.log(this.props)

    return(
      <div>
        Band Component
        <li>
          {this.props.band.name}
        <button onClick={() => this.props.delete(this.props.band.id)}>DELETE</button>
        </li>
          
      </div>
    );
  }
};

export default Band;





