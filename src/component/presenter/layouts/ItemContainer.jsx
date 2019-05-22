import styled from 'styled-components';

const ItemContainer = styled.div`
  height: 85vh;
  width: 25%;
  display: inline-block;
  background-color: #221e1f;
  transform: rotate(${props => (props.reverse ? '180deg' : '0')});
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0px;
  }
`;

export default ItemContainer;
