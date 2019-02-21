import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'
import { connect } from 'react-redux'
import { List as list } from 'immutable'
import * as actions from '../../actions/index'
// ^ importing all actions
import { bindActionCreators } from 'redux'

class Home extends Component {

  // state = {
  //   isModalVisible: false,
  //   media: null
  // }

  render() {
    return(
      <HandleError>
        <HomeLayout>
          <Related></Related>
          <Categories
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            search={this.props.search}
          />
          {
            this.props.modal.get('visibility') &&
            <ModalContainer>
              <Modal 
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                  autoplay
                  id={this.props.modal.get('mediaId')}
                  // src={this.state.media.src}
                  // title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }

  handleCloseModal= (event) => {

    // this.setState({
    //   isModalVisible: false,
    // })

    // bindActionCreators:
    this.props.actions(closeModal())
    // this.props.dispatch(closeModal()) // commented out because we will be using redux bindActionCreators

    // Now imported from actions file: // Using action creator
    // this.props.dispatch({
    //   type: 'CLOSE_MODAL'
    // })
  }

  handleOpenModal = (media) => {
    // this.setState({
    //   isModalVisible: true,
    //   media // key and value are named the same
    // })

    // bindActionCreators:
    this.props.actions(openModal(media))
    // this.props.dispatch(openModal(media)) // commented out because we will be using redux bindActionCreators

    // Now imported from actions file: // Using action creator
    // this.props.dispatch({
    //   type: 'OPEN_MODAL',
    //   payload: {
    //     mediaId: media
    //   }
    // })
  }

}

function mapStateToProps(state, props) {
  const categories = state.get('data').get('categories').map((categoryId) => {
    return state.get('data').get('entities').get('categories').get(categoryId)
  })

  // if (action.payload.query) {
    //   const query = action.payload.query.toLowerCase()
    //   const categories = state.data.categories
    //   const playlists = categories[2].playlist
    //   filteredPlaylists = playlists.filter(playlist => playlist.author.toLowerCase().includes(query))
    // }
  let searchResults = list()
  const search = state.get('data').get('search')
  if (search) {
    const mediaList = state.get('data').get('entities').get('media');
    searchResults = mediaList.filter((item) => (
      item.get('author').toLowerCase().includes(search.toLowerCase())
    )).toList();
  }
  return {
    categories: categories,
    search: searchResults,
    modal: state.get('modal')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);