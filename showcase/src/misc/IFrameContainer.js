import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ADAPTED
// from https://codepen.io/micha149/pen/zBzLwJ
class IFrameContainer extends Component {
    
  componentDidMount() {
    this._updateIframe();
  }

  componentDidUpdate() {
    this._updateIframe();
  }

  _updateIframe() {
    const iframe = this.refs.iframe;
    const document = iframe.contentDocument;
    document.body.innerHTML = this.props.content;
  }

  render() {
    const { className } = this.props;
    return <iframe ref="iframe" className={className} />;
  }
}

IFrameContainer.propTypes = {
  content: PropTypes.string.isRequired
};

export default IFrameContainer;