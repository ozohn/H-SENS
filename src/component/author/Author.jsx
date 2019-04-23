/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Card, Icon } from 'semantic-ui-react';
import AuthorContent from './AuthorContent';
import AuthorLoader from './AuthorLoader';

const SameHeightImage = styled(Image)`
  &&& {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;
const ImageContainer = styled.div`
  &&& {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 75%;
  }
`;
const CardContent = styled(Card.Content)`
  &&& {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 30%;
  }
`;

const Authors = ({ user }) => {
  if (user === undefined) {
    return <AuthorLoader />;
  }

  return (
    <Card fluid>
      <ImageContainer>
        {user.userimage ? (
          <SameHeightImage src={user.userimage} />
        ) : (
          <SameHeightImage src="https://react.semantic-ui.com/images/wireframe/image.png" />
        )}
      </ImageContainer>
      <CardContent>
        <AuthorContent user={user} />
      </CardContent>
      <Card.Content extra>
        <Icon name="heart outline" />
        like
      </Card.Content>
    </Card>
  );
};

export default function Author({ authors }) {
  return (
    <Grid columns={3} stackable>
      <Grid.Column>
        <Authors user={authors[1]} />
      </Grid.Column>
      <Grid.Column>
        <Authors user={authors[2]} />
      </Grid.Column>
      <Grid.Column>
        <Authors user={authors[3]} />
      </Grid.Column>
    </Grid>
  );
}
