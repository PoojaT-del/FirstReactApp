import { getByDisplayValue } from '@testing-library/react';
import React, {createRef,Component} from 'react'

export default class UseRef extends Component{
    constructor()
    {
        super();
       this.inputRef = createRef();

    }
    componentDidMount()
    {
        //console.log(this.inputRef.current.value="1000");
    }

    getVal()
    {
        console.log(this.inputRef.current.value)
        this.inputRef.current.style.color="blue"
        this.inputRef.current.style.backgroundColor="pink"

    }
    
    render()
    {
        return(
            <div>
                <h1>Example Of useRef</h1>
                <input type="text" ref={this.inputRef} />
                <button onClick={()=>this.getVal()}>CheckRef</button>
            </div>
        )
    }
}