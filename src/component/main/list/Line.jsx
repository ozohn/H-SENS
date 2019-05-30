/* eslint-disable no-underscore-dangle */
import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ItemContainer from './ItemContainer';
import { isString } from '../../../util/checkType';
const StyledImage = styled.div`
  display: block;
  width: 100%;
  height: 42.5vh;
  background: no-repeat center / 80% url(${props => props.src});
`;

const Line = ({ history, works, scroll }) => {
  const scrollEl = useRef(null);
  const sourse = 'https://react.semantic-ui.com/images/wireframe/image.png';

  useEffect(() => {
    if (scrollEl.current === null) return;
    scrollEl.current.style.transform = `rotate(180deg) translateY(-${scroll * 2}px)`;
  }, [scroll]);

  return (
    <ItemContainer ref={scroll ? scrollEl : null}>
      {works.map(work => {
        return (
          <StyledImage
            onClick={() => {
              if (!isString(work.id)) return;
              history.push(`/work/${work.id}`);
            }}
            key={work.id}
            src={work.workimage ? work.workimage : null}
            size="small"
          />
        );
      })}
    </ItemContainer>
  );
};

export default withRouter(Line);
