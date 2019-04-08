import React from 'react';
import styled from 'styled-components'

const ListItems = styled.div`
    height: 300px;
    width: 100%;
    display: flex;
    margin: 0 auto;
`;
const Item = styled.div`
    flex: 1;
    border: 1px solid #bbb;
`;

export default function Author(){
    return (
        <ListItems>
            <Item></Item>
            <Item></Item>
            <Item></Item>
        </ListItems>
    )
}