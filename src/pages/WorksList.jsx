/* eslint-disable no-underscore-dangle */
import styled from 'styled-components';
import { Image, Icon } from 'semantic-ui-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WorkContext } from '../context/work/workContext';

const Works = styled.ul`
  position: absolute;
  top: 50%;
  left: 0;
  width: 50vh;
  height: 100vw;
  padding: 0;
  overflow-y: auto;
  overflow-x: scroll;
  transform: rotate(-90deg) translateX(30%) translateY(-50vh);
  transform-origin: right top;
  text-align: center;
  background-color: transparent;
  font-size: 0;
  margin: 0;
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

const ItemContainer = styled.li`
  position: relative;
  top: 0;
  left: 0;
  width: 20rem;
  height: 20rem;
  margin-bottom: 5rem;
  display: inline-block;
  cursor: pointer;
  transform: rotate(90deg);
  transform-origin: center center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
`;

const CustomImage = styled(Image)`
  &&& {
    height: auto;
    width: 100%;
  }
`;

const Button = styled(Link)`
  margin-top: 2rem;
  border: 0;
  outline: none;
  font-size: 2.2rem;
  background-color: transparent;
  color: #ff4d4d;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid #ff4d4d;
  }
  &&& {
    float: right;
  }
`;

const EditBtnContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 20%;
  margin: 0;
  padding-top: 0.5rem;
  padding-right: 0.25rem;
  font-size: 1.3rem;
  color: #eee;
  text-align: right;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0)
  );
`;

export default function WorksList() {
  const { state, showWork } = useContext(WorkContext);
  return (
    <>
      <Button to={{ pathname: '/worksetting', state: { submit: 'Add' } }}>create</Button>
      <Works>
        {state &&
          state.map(work => <Work key={work._id} work={work} showWork={showWork} />)}
      </Works>
    </>
  );
}

function Work({ work, showWork }) {
  return (
    <ItemContainer>
      <CustomImage
        onClick={() => showWork(work)}
        src={work.workimage}
        verticalAlign="top"
        size="medium"
      />
      <EditBtnContainer
        onClick={e => {
          if (e.currentTarget === e.target) {
            showWork(work);
          }
        }}
      >
        <Link to={{ pathname: '/worksetting', state: { submit: 'Edit', work } }}>
          <Icon name="eraser" />
        </Link>
      </EditBtnContainer>
    </ItemContainer>
  );
}
