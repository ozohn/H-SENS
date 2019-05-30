import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useMutation } from 'react-apollo-hooks';
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
  min-height: 100vh;
  margin: 0 auto;
  background-color: #fff;
`;
const WorkHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
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
  searchWork,
  search,
}) => {
  const [work, setWork] = useState(null);
  const getWorkInfo = useMutation(SEE_WORK, {
    variables: { workid: workid || searchWork },
  });

  useEffect(() => {
    const getWork = async () => {
      const {
        data: { seeWork },
      } = await getWorkInfo();
      return setWork(seeWork);
    };
    getWork();
  }, []);
  window.scrollTo(0, window.innerHeight);
  document.body.style.overflowY = 'hidden';
  return (
    <WorkCover
      onClick={e => {
        if (e.target === e.currentTarget) {
          document.body.style.overflowY = 'auto';
          if (userid) history.push(`/${userid}`);
          else if (searchWork) {
            const searchedUrl = search.split('/')[0];
            history.push(`/search/${searchedUrl}`);
          } else history.push(`/`);
        }
      }}
      target={work}
    >
      {
        <WorkInformation>
          {work && (
            <>
              <WorkHeader>
                <WorkTitle>{work.worktitle}</WorkTitle>
                <WorkImg src={work.workimage} alt="this work" />
              </WorkHeader>
              <ViewerContainer>
                <Viewer
                  initialValue={work.workdesc}
                  previewStyle="vertical"
                  height="600px"
                />
              </ViewerContainer>
            </>
          )}
        </WorkInformation>
      }
    </WorkCover>
  );
};

export default withRouter(WorkDetail);
