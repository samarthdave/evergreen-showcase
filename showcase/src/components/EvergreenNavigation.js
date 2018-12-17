import React from 'react';
import { Link } from 'react-router-dom';
import {
  Pane,
  Button,
  Heading,
} from 'evergreen-ui';

const EvergreenNavigation = () => {
  return (
    <Pane
      display="flex"
      padding={16}
      background="tealTint"
      borderRadius={3}>
      <Pane
        flex={1}
        alignItems="center"
        display="flex">
        <Heading size={700}>Evergreen Showcase (unofficial)</Heading>
      </Pane>
      <Pane>
        <Button
          marginRight={16}
          size={500}
          height={40}
          appearance='primary'
          intent='success'>
            <Link to='/eg'>Evergreen</Link>
        </Button>
        <Button
          marginRight={16}
          size={500}
          height={40}
          appearance='primary'>
            <Link to='/bootstrap-showcase'>Bootstrap 3.3.7 (iframe)</Link>
        </Button>
        <Button
          height={40}
          size={500}>
            <a href="https://github.com/samarthdave/evergreen-showcase/">Github</a>
        </Button>
      </Pane>
    </Pane>
  );
};
 
export default EvergreenNavigation;