import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';

class Home extends Component {

  state = {
    isModalVisible: false
  }

  render() {
    return(
      <HomeLayout>
        <Related></Related>
        <Categories categories={this.props.data.categories} handleOpenModal={this.handleOpenModal}/>
        {
          this.state.isModalVisible &&
          <ModalContainer>
            <Modal 
              handleClick={this.handleCloseModal}
            >
              <h1>This is a portal</h1>
            </Modal>
          </ModalContainer>
        }
      </HomeLayout>
    )
  }

  handleCloseModal= (event) => {
    this.setState({
      isModalVisible: false,
    })
  }

  handleOpenModal = () => {
    this.setState({
      isModalVisible: true,
    })
  }
}

export default Home;