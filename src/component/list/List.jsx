import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

const StyledImage = styled(Image)`
  &&& {
    width: 100%;
    height: 40vh;
  }
`;
const ListContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  margin: 0 auto;
`;
const Item = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  flex: 1;
  border: 1px solid #bbb;
`;

export default function List() {
  const [scrollNum, setScrollNum] = useState(0);
  const firline = useRef(null);
  const secline = useRef(null);
  const trdline = useRef(null);

  const onScrollEvent = e => {
    console.log(e.target);
    setScrollNum(firline.current.offsetHeight);
    firline.current.scrollTop = firline.current.scrollTop;
    secline.current.scrollTop = firline.current.offsetHeight - firline.current.scrollTop;
    trdline.current.scrollTop = firline.current.scrollTop;
  };

  return (
    <ListContainer onScrollCapture={onScrollEvent}>
      <Item ref={firline}>
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
      <Item ref={secline}>
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
      <Item ref={trdline}>
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
    </ListContainer>
  );
}
