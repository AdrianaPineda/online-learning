import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {

  state = {
    value: 'Luis Fonsi'
  }

  render() {
    return(
      <Search 
        setRef={this.setRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('submit');
    console.log(this.input.value);
    // How do we get the element?
    // 1) document.getElementById (not the best option)
    // 2) function through props: see setRef, it will be assigned in ref in input
    
  }

  setRef = element => {
    this.input = element
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value
      // We can transform here, for example
      // value: event.target.value.replace(' ', '-')
    })
  }
}

export default SearchContainer;