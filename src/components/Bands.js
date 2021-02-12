import React, { Component } from 'react';
//import BandsContainer from './BandsContainer';

const Bands = props => {
    const bandList = props.bands.map(band => <Band key={band.id} band={band} />)
  return (
    <div>
      {bandList}
    </div>
  )
}

