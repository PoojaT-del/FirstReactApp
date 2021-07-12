import React,{useMemo, useState} from 'react'

export default function UseMemo()
{
    const[count, setCount] = useState(0);
    const[item, setItem] = useState(10);

  const MultiCountMemo = useMemo(function MultiCount()
  {
      console.log("Count Updated");
      return count*5
  },[count])
    return(
        <div>
            <h1>Use UseMemo Example</h1>
            <h2>Count:: {count}</h2>
            <h2>Item:: {item}</h2>
            <h2>{MultiCountMemo}</h2>
            <button onClick={()=>setCount(count+1)}>Click Here</button>
            <button onClick={()=>setItem(item*10)}>Press Me</button>
        </div>
    )
}