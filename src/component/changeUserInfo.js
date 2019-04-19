import useFetch from './fetch.js';

<<<<<<< HEAD
export default async function ChangeUserInfo(user){
    console.log(user)
    return await useFetch(
        `${process.env.REACT_APP_SERVER_URL}/creator/edit`, 
        "POST", 
        {
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        JSON.stringify(user)
    )
}
=======
export default async function ChangeUserInfo(user) {
  return await useFetch(
    `${process.env.REACT_APP_SERVER_URL}/creator/edit`,
    'POST',
    {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    JSON.stringify(user)
  );
}
>>>>>>> e26d00affe0579cc7087a127c58a7c30d6eb4129
