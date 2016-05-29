import React, { Component } from 'react';
import Video from 'react-html5video';
import { Modal } from 'react-bootstrap';

export default class MovieView extends Component {
  render () {
    return (
      <div>
      <Modal show={this.props.showVideo} onHide={this._handleClose.bind(this)}>
        <Modal.Body>
          <Video controls autoPlay loop ref="video" onProgress={this.onProgress}>
          <source src={this.props.videoUrl} type="video/mp4" />
          </Video>
        </Modal.Body>
      </Modal>
      </div>
    );
  }

  _handleClose(event){
    this.props.closeVideo();
  }
}
