function data(state, action) {
  switch(action.type) {
    case 'SEARCH_VIDEO': {
      const query = action.payload.query
      const categories = state.data.categories
      const playlists = categories[2].playlist
      const filteredPlaylists = playlists.filter(playlist => playlist.author.includes(query))
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