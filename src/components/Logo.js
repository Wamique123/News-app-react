import React, { Component } from 'react'
import lug from './lug.png'

export class Logo extends Component {
  render() {
    return (
      <div className='mx-2'>
        <img src={lug} alt={lug} style={{width:"70px"}}/>
      </div>
    )
  }
}

export default Logo

