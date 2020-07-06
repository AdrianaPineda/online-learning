import React, { Component } from 'react';

class Media extends Component { // We are using js destructuring capabilities
// class Media extends React.Component {

  render() {
    // Inline styles
    const styles = {
      container: {
        // We use camel case because hyphen is not recognized
        // fontSize: 18, // px is assumed
        // backgroundColor: 'red',
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red'
      }
    }
    return(
      <div style={styles.container}>
        <div>
          <img 
            src="./images/covers/bitcoin.jpg" 
            alt="" 
            width={260} 
            height={160}
          />
          <h3>Why learn React?</h3>
          <p>Adriana Pineda</p>
        </div>
      </div>
    )
  }

}

// Needed for Media to be imported from index.js
export default Media;