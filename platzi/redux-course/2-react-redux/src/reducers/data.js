function data(state, action) {
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