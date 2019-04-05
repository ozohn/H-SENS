import React from 'react';
import styled from 'styled-components'

const ListContainer = styled.div`
    height: 200px;
    width: 80%;
    display: flex;
    margin: 0 auto;
    margin-top: 50px;
`;
const Item = styled.div`
    flex: 1;
    border: 1px solid #bbb;
`;

export default function List(){
    return (
        <ListContainer>
            <Item></Item>
            <Item></Item>
            <Item></Item>
        </ListContainer>
    )
}