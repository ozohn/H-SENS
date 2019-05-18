import styled from 'styled-components';

const ListContainer = styled.div`
  position: relative;
  background-color: #221e1f;
  display: inline-block;
  height: 85vh;
  width: 100%;
  margin: 0 auto;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export default ListContainer;
