import React, { Component } from 'react';
import './media.css'

class Media extends Component {

  render() {
    return(
      // We cannot use class because it is a reserved word
      <div className="Media">
        <div className="Media-cover">
          <img 
            className="Media-image"
            src="./images/covers/bitcoin.jpg" 
            alt="" 
            width={260} 
            height={160}
          />
          <h3 className="Media-title">Why learn React?</h3>
          <p className="Media-author">Adriana Pineda</p>
        </div>
      </div>
    )
  }

}

// Needed for Media to be imported from index.js
export default Media;