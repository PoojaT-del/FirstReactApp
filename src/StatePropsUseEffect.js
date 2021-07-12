import react,{useEffect, useState} from 'react'

 export default function UEStateProp()
{
    
    //initialise useState for set data
    //this is state in hook
    const [data, setData] = useState(10);
    const [count, setCount] = useState(100);

    useEffect(()=>{
        console.log("Called UseEffect data");
    },[data]
    )

    return(
        <div>
            <h1>Count :: {count}</h1>
            <h1>Data :: {data}</h1>
            <button onClick={()=>setCount(count+1)}>Click ME</button>
            <button onClick={()=>setData(data+1)}>Press Me</button>
        </div>
    )
}