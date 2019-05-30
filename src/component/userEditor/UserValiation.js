import React from 'react';
import { Message } from 'semantic-ui-react';
import styled from 'styled-components';

const ValiationMessage = styled(Message)`
  &&& {
    display: ${props => (props.error ? 'block' : 'none')};
  }
`;

const UserValiation = ({ error }) => {
  return (
    <ValiationMessage color="red" error={error}>
      <Message.Header>please write your user name</Message.Header>
    </ValiationMessage>
  );
};

export default UserValiation;
