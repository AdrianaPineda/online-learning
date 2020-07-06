import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './media.css'

class Media extends Component {

  // ECMAScript 6
  // constructor(props) {
  //   super(props)
  //   this.handleClick = this.handleClick.bind(this)
  // }

  // this.props > dynamic properties sent from index.js
  // className, src, alt are called properties not attributes
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
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }

  // ECMAScript 6:
  // handleClick(event) {
  //   // console.log(event);
  //   console.log(this.props.title); // Only works after binding this to the method
  // }  

  // ECMAScript 7:
  // Arrow functions inherit context from its parent
  handleClick = (event) => {
    console.log(this.props.image);
  }

}

// To validate data types
Media.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired, // If a property is not sent, it won't be validated unless add `isRequired`
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']),
}

// https://reactjs.org/docs/typechecking-with-proptypes.html

export default Media;