import React from 'react';
import Category from './category';
import './categories.css'
import Search from '../../widgets/containers/search';
import Media from '../../playlist/components/media'


function Categories(props) {
  return(
    <div className="Categories">
    <Search />
    {
      props.search.map((item) => { // item is now a map (due to the immutability support)
        return <Media key={item.get('id')} {...item.toJS()}/> // toJS() generates a new object every time we render the component
        // solution: <Media key={item.id} title={item.get('title') ...)}/>
      })
    }
      {
        props.categories.map((item) => { // item is now a map (due to the immutability support)
          return (
            <Category 
              key={item.get('id')}
              {...item.toJS()}
              handleOpenModal={props.handleOpenModal} />
          )
        })
      }
    </div>
  )
}


export default Categories;
