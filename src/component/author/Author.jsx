import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useFetch from '../fetch.js';
import { Grid, Image } from 'semantic-ui-react';

const AuthorDesc = styled.div`
  border-top: 1px solid #393e46;
  magin: auto;
`;
const AuthorName = styled.div`
  border-top: 1px solid #393e46;
  magin: auto;
`;
const Container = styled.div`
  border: 1px solid #393e46;
`;

const Authors = props => {
  if (props.user === undefined) {
    return (
      <Container>
        <Image />
        <AuthorName />
        <AuthorDesc />
      </Container>
    );
  }

  return (
    <Container>
      <Image src={props.user.userimage} />
      <AuthorName>{props.user.username}</AuthorName>
      <AuthorDesc>{props.user.userdesc}</AuthorDesc>
    </Container>
  );
};

const getUserData = async () => {
  return await useFetch(`${process.env.REACT_APP_SERVER_URL}/main/users`, 'POST');
};

export default function Author() {
  const [authorData, setAuthorData] = useState('');

  useEffect(() => {
    const fetchedData = getUserData();
    fetchedData.then(user => {
      // user.length = authors;
      setAuthorData(user);
    });
  }, []);

  return (
    <Grid columns={3} stackable>
      <Grid.Column>
        <Authors user={authorData[1]} />
      </Grid.Column>
      <Grid.Column>
        <Authors user={authorData[2]} />
      </Grid.Column>
      <Grid.Column>
        <Authors user={authorData[3]} />
      </Grid.Column>
    </Grid>
  );
}
