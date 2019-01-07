import React from 'react';
import Playlist from '../../playlist/components/3-playlist';
import './category.css'

function Category(props) {
  return(
    <div className="Category">
      <p className="Category-description">{props.description}</p>
      <h2 className="Category-title">{props.title}</h2>
      <Playlist playlist={props.playlist} />
    </div>
  )
}

export default Category;