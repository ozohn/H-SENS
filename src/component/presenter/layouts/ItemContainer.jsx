import styled from 'styled-components';

const ItemContainer = styled.div`
  height: 85vh;
  width: 25%;
  border: 1px solid #bbb;
  display: inline-block;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0px;
  }
`;

export default ItemContainer;
