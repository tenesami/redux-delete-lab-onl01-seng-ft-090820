import React, { Component } from 'react'
import BandInput from './BandInput';

import { connect } from 'react-redux'

class BandsContainer extends Component {
  
  renderBands = () => {
  return this.props.bands.map(band =>  <li key={band.id}> {band.bandName}</li>)
}

  render() {
    console.log(this.props.bands)
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
             {this.renderBands()}
        </ul>
     
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
