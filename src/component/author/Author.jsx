import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Card, Icon } from 'semantic-ui-react';
import AuthorContent from './AuthorContent.jsx';
import AuthorLoader from './AuthorLoader.jsx';

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

const Authors = props => {
  if (props.user === undefined) {
    return <AuthorLoader />;
  }

  return (
    <Card fluid>
      <ImageContainer>
        {props.user.userimage ? (
          <SameHeightImage src={props.user.userimage} />
        ) : (
          <SameHeightImage src="https://react.semantic-ui.com/images/wireframe/image.png" />
        )}
      </ImageContainer>
      <CardContent>
        <AuthorContent user={props.user} />
      </CardContent>
      <Card.Content extra>
        <a>
          <Icon name="heart outline" />
          like
        </a>
      </Card.Content>
    </Card>
  );
};

export default function Author(props) {
  return (
    <Grid columns={3} stackable>
      <Grid.Column>
        <Authors user={props.authors[1]} />
      </Grid.Column>
      <Grid.Column>
        <Authors user={props.authors[2]} />
      </Grid.Column>
      <Grid.Column>
        <Authors user={props.authors[3]} />
      </Grid.Column>
    </Grid>
  );
}
