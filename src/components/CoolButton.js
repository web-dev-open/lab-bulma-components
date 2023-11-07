import React, { Component } from 'react'


class CoolButton extends Component {
    render() {
      const {className, btnName } = this.props
  
      return (
        <button  class={className} >{btnName} </button>
      )
    }
  }

export default CoolButton