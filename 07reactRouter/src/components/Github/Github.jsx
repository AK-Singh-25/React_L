import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

export default function Github() {
  const data = useLoaderData();
  // const [data,setData]=useState([])
  // useEffect(()=>{
  //     fetch('https://api.github.com/users/AK-Singh-25')
  //     .then((res)=>res.json())
  //     .then((data)=> setData(data))
  // },[])
  return (
    <div className="text-center m-4 bg-gray-600 text-hiwte p-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Avatar" width={300} />
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/AK-Singh-25");
  return response.json();
};
