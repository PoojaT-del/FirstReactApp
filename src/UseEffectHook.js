import React,{useEffect, useState} from 'react'

export default function UseEffect(){
    const [count , setCount] = useState(0)

     useEffect(()=>{

     }
     )
     return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={()=>setCount (count+1)}>Update Counter</button>
        </div>
    )
}