import React from 'react';
import styled from 'styled-components';
import { Grid, Image } from 'semantic-ui-react';

const ListItems = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  margin: 0 auto;
`;
const Item = styled.div`
  flex: 1;
  border: 1px solid #bbb;
`;

export default function Author() {
  return (
    <Grid columns={3} stackable>
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      </Grid.Column>
    </Grid>
  );
}
