import useFetch from './fetch';

export default async function ChangeUserInfo(user) {
  const fetchedData = await useFetch(
    `${process.env.REACT_APP_SERVER_URL}/creator/edit`,
    'POST',
    {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    JSON.stringify(user),
  );
  return fetchedData;
}
