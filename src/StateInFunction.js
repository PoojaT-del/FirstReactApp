import {useState} from 'react'

export default function State() {
    const [data, setData] = useState("Pooja")
function updateData(){
    setData("Queen")
}
    return(
        <div className="State">
            <h1>{data}</h1>
            <button onClick={updateData}>Update Data</button>

        </div>
    )

}