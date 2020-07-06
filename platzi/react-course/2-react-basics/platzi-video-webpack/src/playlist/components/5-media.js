import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './media.css'

class Media extends Component {

  // ECMAScript 6:
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     author: props.author
  //   }
  // }

  // ECMAScript 7:
  state = {
    author: 'Adriana Pineda'
    // author: this.props.author
  }

  render() {
    return(
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img 
            className="Media-image"
            src={this.props.image}
            alt="" 
            width={260} 
            height={160}
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.state.author}</p>
        </div>
      </div>
    )
  }

  handleClick = (event) => {
    // Change state:
    this.setState({
      author: 'Someone else'
    })
  }

}

// To validate data types
Media.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired, // If a property is not sent, it won't be validated unless add `isRequired`
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;