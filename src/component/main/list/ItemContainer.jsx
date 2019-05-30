import styled from 'styled-components';

const ItemContainer = styled.div`
  height: 85vh;
  width: 25%;
  display: inline-block;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0px;
  }
  &:nth-child(2n) {
    transform: rotate(180deg);
    div {
      transform: rotate(180deg);
    }
  }
`;

export default ItemContainer;
