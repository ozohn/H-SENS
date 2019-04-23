import React from 'react';
import styled from 'styled-components';
import { Loader, Image, Card, Icon } from 'semantic-ui-react';

const ImageLoaderContainer = styled(Image)`
  &&& {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 75%;
  }
`;
const CenterdLoader = styled(Loader)`
  &&& {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;
const ContentContainer = styled(Card.Content)`
  &&& {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 30%;
  }
`;
const AuthorLoader = props => {
  return (
    <Card fluid>
      <ImageLoaderContainer>
        <CenterdLoader active inline="centered" />
      </ImageLoaderContainer>
      <ContentContainer>
        <CenterdLoader active inline="centered" />
      </ContentContainer>
      <Card.Content extra>
        <a>
          <Icon name="heart outline" />
          like
        </a>
      </Card.Content>
    </Card>
  );
};

export default AuthorLoader;
