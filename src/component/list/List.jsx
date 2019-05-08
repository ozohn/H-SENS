import React, { useState } from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

const StyledImage = styled(Image)`
  &&& {
    width: 100%;
  }
`;
const ReverseImage = styled(StyledImage)`
  &&& {
    transform: rotate(180deg);
  }
`;
const ListContainer = styled.div`
  height: 85vh;
  width: 100%;
  margin: 0 auto;
  overflow-y: scroll;
`;
const Item = styled.div`
  height: 85vh;
  width: 25%;
  border: 1px solid #bbb;
  display: inline-block;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0px;
  }
`;

const ReverseItem = styled(Item)`
  transform: rotate(180deg) translateY(-${props => props.height * 2}px);
`;

export default function List() {
  const [scroll, setScroll] = useState('');
  const multiScroll = e => {
    setScroll(e.target.scrollTop);
  };

  return (
    <ListContainer onScroll={multiScroll}>
      <Item>
        <StyledImage
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          size="small"
        />
        <StyledImage
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          size="small"
        />
        <StyledImage
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          size="small"
        />
      </Item>
      <ReverseItem height={scroll}>
        <ReverseImage
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          size="small"
        />
        <ReverseImage
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          size="small"
        />
        <ReverseImage
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          size="small"
        />
      </ReverseItem>
      <Item>
        <StyledImage
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          size="small"
        />
        <StyledImage
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          size="small"
        />
        <StyledImage
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          size="small"
        />
      </Item>
      <ReverseItem height={scroll}>
        <ReverseImage
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          size="small"
        />
        <ReverseImage
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          size="small"
        />
        <ReverseImage
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          size="small"
        />
      </ReverseItem>
    </ListContainer>
  );
}
