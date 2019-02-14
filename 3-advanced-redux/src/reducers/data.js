import schema from '../schemas/index.js';
import { fromJS } from 'immutable'

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: []
})

// No `data` key needed there ^ because in the combine reducers function we are doing it

function data(state = initialState, action) {
  switch(action.type) {
    case 'SEARCH_VIDEO': {
      let filteredPlaylists = []
      if (action.payload.query) {
        const query = action.payload.query.toLowerCase()
        const categories = state.data.categories
        const playlists = categories[2].playlist
        filteredPlaylists = playlists.filter(playlist => playlist.author.toLowerCase().includes(query))
      }
      return {
        ...state,
        search: filteredPlaylists
      }
    }
    default:
      return state
  }
}

export default data;