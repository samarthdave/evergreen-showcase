import React, { Component } from 'react';

import IFrameContainer from '../misc/IFrameContainer';
import { Bootstrap337Code } from '../misc/Bootstrap337Code';

class BootstrapShowcase extends Component {
  state = {
    content: Bootstrap337Code,
  };
  rawMarkup() {
    const rawMarkup = Bootstrap337Code;
    return { __html: rawMarkup };
  }
  render() {
    const { content } = this.state;
    return (
      <IFrameContainer
        content={content}
        className='iframe-bootstrap' />
    );
  }
}
 
export default BootstrapShowcase;