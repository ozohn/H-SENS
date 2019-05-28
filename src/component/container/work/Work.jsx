/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { Image, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { DELETE_WORK, EDIT_WORK } from './WorkQueries';

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

const Work = ({
  match: {
    params: { userid },
  },
  work,
}) => {
  const deleteWork = useMutation(EDIT_WORK, {
    variables: { workid: work.id },
  });
  return (
    <ItemContainer>
      <CustomImage
        // onClick={() => showWork(work)}
        src={work.workimage}
        verticalAlign="top"
        size="medium"
      />
      <EditBtnContainer>
        <Icon name="remove circle" onClick={deleteWork} />
        <Link
          to={{
            pathname: `/${userid}/${work.id}/editor`,
            state: { submit: 'Edit', work },
          }}
        >
          <Icon name="eraser" />
        </Link>
      </EditBtnContainer>
    </ItemContainer>
  );
};

export default withRouter(Work);
