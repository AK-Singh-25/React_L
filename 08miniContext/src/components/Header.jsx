import React,{useContext} from "react";
import UserContext from "../context/userContext";

export default function Header(){
    const {user}=useContext(UserContext)
    return(
        <h1>Context API | {user&&user.username}</h1>
    )
}