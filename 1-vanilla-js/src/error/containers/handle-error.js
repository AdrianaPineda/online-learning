import React, { Component } from 'react';
import RegularError from '../components/regular-error'

class HandleError extends Component {

  state = {
    handleError: false,
  }

  render() {
    if (this.state.handleError) {
      return <RegularError />
    }
    return this.props.children
  }

  componentDidCatch(error, info) {
    // Sends error to service like Sentry
    this.setState({
      handleError: true
    })
  }
}

export default HandleError;