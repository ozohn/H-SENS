import styled from 'styled-components';

const ListContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 85vh;
  width: 100%;
  margin: 0 auto;
  overflow-y: scroll;
  background-color: #1a1818;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export default ListContainer;
