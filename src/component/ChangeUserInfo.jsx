import React from "react";

export default function ChangeUserInfo({user}){
    return useFetch(
        `${process.env.REACT_APP_SERVER_URL}/creator/edit`, 
        "POST", 
        {
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        JSON.stringify(user)
    )
}