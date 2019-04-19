import useFetch from './fetch.js';

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
