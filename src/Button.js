import { react } from '@babel/types';
import { div } from 'prelude-ls';
import React from 'react'

export default class Button extends React.Component{

    render()
    {
        console.log(this.props)
         return(
             
             <button>{this.props.name}</button>
             
         )
    }

}