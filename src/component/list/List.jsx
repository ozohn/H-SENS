import React, { useEffect, useRef } from 'react';
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
  margin: 0 auto;
  overflow: hidden;
`;

const Item = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  height: 80vh;
  width: 33.333333333333%;
  border: 1px solid #bbb;
  display: inline-block;
`;

export default function List() {
  const firLine = useRef(null);
  const secLine = useRef(null);
  const trdLine = useRef(null);

  const multiScroll = e => {
    if (e.target === firLine.current) {
      const sum = firLine.current.clientHeight + firLine.current.scrollTop;
      secLine.current.scrollTop = firLine.current.scrollHeight - sum;
      trdLine.current.scrollTop = firLine.current.scrollTop;
    } else if (e.target === secLine.current) {
      const sum = secLine.current.clientHeight + secLine.current.scrollTop;
      firLine.current.scrollTop = secLine.current.scrollHeight - sum;
      trdLine.current.scrollTop = secLine.current.scrollHeight - sum;
    } else {
      const sum = trdLine.current.clientHeight + trdLine.current.scrollTop;
      firLine.current.scrollTop = trdLine.current.scrollTop;
      secLine.current.scrollTop = secLine.current.scrollHeight - sum;
    }
  };

  return (
    <ListContainer onScroll={multiScroll}>
      <Item ref={firLine}>
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
      <Item ref={secLine}>
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
      <Item ref={trdLine}>
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
