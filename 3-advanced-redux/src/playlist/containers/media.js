import React, { Component } from 'react'
import Media from '../components/media'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'

class MediaContainer extends Component {

  openModal = (id) => {

    // Using bindActionCreators:
    this.props.actions.openModal(id)

    // Using action creator
    // this.props.dispatch(openModal(id))
    // this.props.dispatch({
    //   type: 'OPEN_MODAL',
    //   payload: {
    //     mediaId: id
    //   }
    // })
  }

  render() {
    return(
      <Media openModal={this.openModal} {...this.props.data.toJS()} />
    )
  }
}

function mapStateToProps(state, props) {
  return {
    data: state.get('data').get('entities').get('media').get(props.id)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer)