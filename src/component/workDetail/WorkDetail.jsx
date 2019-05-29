import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import styled from 'styled-components';
import { Viewer } from '@toast-ui/react-editor';
import { SEE_WORK } from '../workEditor/WorkQueries';

const WorkCover = styled.div`
  display: ${props => (props.target ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: all 0.2s ease-in-out;
  overflow-y: scroll;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.7);
`;

const WorkInformation = styled.div`
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
`;
const WorkHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 12rem;
  background-color: #231f20;
  color: #55fe47;
`;
const WorkTitle = styled.h3`
  font-size: 4rem;
`;
const WorkImg = styled.img`
  height: 10rem;
  width: auto;
`;
const ViewerContainer = styled.div`
  padding: 3rem;
`;

const WorkDetail = ({
  match: {
    params: { workid, userid },
  },
  history,
<<<<<<< HEAD
  searched,
}) => {
  if (searched) {
    workid = searched.split('/')[1];
  }
=======
  searchWork,
  search,
}) => {
>>>>>>> d861e6fc4a9752683b00bbe44ba87d0e7be8bace
  const { data } = useQuery(SEE_WORK, {
    variables: { workid: workid || searchWork },
  });
  window.scrollTo(0, window.innerHeight);
  document.body.style.overflowY = 'hidden';
  return (
    <WorkCover
      onClick={e => {
        if (e.target === e.currentTarget) {
          document.body.style.overflowY = 'auto';
          if (userid) history.push(`/${userid}`);
<<<<<<< HEAD
          else if (searched) history.push(`${searched.split('/')[0]}`);
          else if (!userid) history.push(`/`);
=======
          else if (searchWork) {
            const searchedUrl = search.split('/')[0];
            history.push(`/search/${searchedUrl}`);
          } else history.push(`/`);
>>>>>>> d861e6fc4a9752683b00bbe44ba87d0e7be8bace
        }
      }}
      target={data.seeWork}
    >
      {data.seeWork && (
        <WorkInformation>
          <WorkHeader>
            <WorkTitle>{data.seeWork.worktitle}</WorkTitle>
            <WorkImg src={data.seeWork.workimage} alt="this work" />
          </WorkHeader>
          <ViewerContainer>
            <Viewer
              initialValue={data.seeWork.workdesc}
              previewStyle="vertical"
              height="600px"
            />
          </ViewerContainer>
        </WorkInformation>
      )}
    </WorkCover>
  );
};

export default withRouter(WorkDetail);
