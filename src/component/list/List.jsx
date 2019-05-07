import React, { useRef } from 'react';
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
// 리버스 div를 만들어서 rotate로 돌리고 구현해 보도록 하자.
// 돌렸기 때문에 translate로 계산하고 맞추어야 한다.
// 잘안되면 개발자 도구로 찍어보고 그려보고 하면서 맞추어보자.

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
