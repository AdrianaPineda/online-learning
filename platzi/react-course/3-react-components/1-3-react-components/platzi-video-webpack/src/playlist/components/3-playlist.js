import React from 'react';
import Media from './3-media';
import './playlist.css';
import Play from '../../icons/components/play';

function Playlist(props) {
  console.log(props.data);
  const playlist = props.data.categories[0].playlist
  
  return(
    <div className="Playlist">
      <Play 
        size={50}
        color="red"
      />
      {
        playlist.map((item) => {
          //return <Media title={item.title} key={item.id} image={item.cover}/>
          // We need to return ^
          // Each child in an array or iterator should have a unique "key" prop > needed
          // because React uses this key to optimize app performance (for example adding or
          // deleting elements)
          // Alternatively, we could use the spread operator 
          // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
          // to send all values to Media (will send one property for each element of item)
          return <Media key={item.id} {...item}/>
        })
      }
    </div>
  )

}

export default Playlist;