import React,{useState} from 'react'

export default function Hooks()
{
    const [data , setData] = useState("Hooks Concept")
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={()=>setData("Welcome to React")}>Update Data</button>
        </div>
    )
}