import React from 'react'
import Box from './Box.js'


const BoxesContain = props =>  {
    return  (
        <div className="box-container">
            <Box bgColor={props.chicken.bgColor1} />
            <Box bgColor={props.chicken.bgColor2}/>
            <Box bgColor={props.chicken.bgColor3}/>
            <Box bgColor={props.chicken.bgColor4}/>
        </div>
    )
}

export default BoxesContain