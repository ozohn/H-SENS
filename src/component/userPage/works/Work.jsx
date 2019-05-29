/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useMutation } from 'react-apollo-hooks';
import { Image, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { DELETE_WORK } from '../../workEditor/WorkQueries';

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
  history,
  work,
  currentUser,
}) => {
  const deleteWork = useMutation(DELETE_WORK, {
    variables: { workid: work.id },
  });
  return (
    <ItemContainer>
      <CustomImage
        onClick={() => history.push(`/${userid}/${work.id}`)}
        src={work.workimage}
        verticalAlign="top"
        size="medium"
      />
      {currentUser && currentUser.userid === userid && (
        <EditBtnContainer>
          <Icon
            name="remove circle"
            onClick={() => {
              deleteWork();
              window.location.replace(`${process.env.REACT_APP_CLIENT_URL}/${userid}`);
            }}
          />
          <Link
            to={{
              pathname: `/${userid}/${work.id}/workeditor`,
              params: { workid: work.id, submit: 'Edit' },
            }}
          >
            <Icon name="eraser" />
          </Link>
        </EditBtnContainer>
      )}
    </ItemContainer>
  );
};

export default withRouter(Work);
