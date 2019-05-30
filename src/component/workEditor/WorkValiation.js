import React from 'react';
import { Message } from 'semantic-ui-react';
import styled from 'styled-components';

const ValiationMessage = styled(Message)`
  &&& {
    display: ${props => (props.error ? 'block' : 'none')};
  }
`;

const WorkTitleValiation = ({ error }) => {
  return (
    <ValiationMessage color="red" error={error}>
      <Message.Header>please add work title</Message.Header>
    </ValiationMessage>
  );
};

const WorkImageValiation = ({ error }) => {
  return (
    <ValiationMessage color="red" error={error}>
      <Message.Header>please add work image</Message.Header>
    </ValiationMessage>
  );
};

export { WorkTitleValiation, WorkImageValiation };
