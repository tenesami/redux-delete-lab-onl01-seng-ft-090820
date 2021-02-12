import React from 'react';
import Band from './Band';


const Bands = props => {
    //console.log(props)
    const bandList = props.bands.map((band, id)=> <Band key={id} band={band} />)
  return (
    <div>
      <ul>
        {bandList}
      </ul>
      
    </div>
  )
}
export default Bands;
