import React, { Component } from 'react'
import {connect} from 'react-redux'
import manageBand from '../reducers/manageBand'
import BandInput from './BandInput'

class BandsContainer extends Component {
  render() {
    const renderBands = this.props.bands.map((band, idx) => <li key={idx}>{band.name}</li>)
    return(
      <div>
        <BandInput bands={this.props.bands} addBand={this.props.addBand}/>
        {renderBands}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addBand: (bandName) => dispatch({type: "ADD_BAND", payload: bandName})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
