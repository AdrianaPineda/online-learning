import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'
import { connect } from 'react-redux'

class Home extends Component {

  state = {
    isModalVisible: false,
    media: null
  }

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
            this.state.isModalVisible &&
            <ModalContainer>
              <Modal 
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                  autoplay
                  src={this.state.media.src}
                  title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }

  handleCloseModal= (event) => {
    this.setState({
      isModalVisible: false,
    })
  }

  handleOpenModal = (media) => {
    this.setState({
      isModalVisible: true,
      media // key and value are named the same
    })
  }

}

function mapStateToProps(state, props) {
  const categories = state.get('data').get('categories').map((categoryId) => {
    return state.get('data').get('entities').get('categories').get(categoryId)
  })

  return {
    categories: categories,
    search: state.get('data').get('search')
  }
}

export default connect(mapStateToProps)(Home);