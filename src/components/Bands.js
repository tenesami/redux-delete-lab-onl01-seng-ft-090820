import React from 'react';
import Band from './Band';
import {connect} from 'react-redux';

const Bands = props => {
    //console.log(props)
    const bandList = props.bands.map((band)=> <Band key={band.id} band={band} delete={props.delete} />)
  return (
    <div>
      <ul>
        {bandList} 
      </ul>
      
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    delete: id => dispatch({type: 'DELETE_BAND', id })
  }
}
export default connect(null, mapDispatchToProps)(Bands);
