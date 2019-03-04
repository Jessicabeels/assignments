import React from 'react'


const Die = (props) => {
    return (
        <div>
            
            <div id={"dice" + props.num}><span className="no-display">{props.num}</span></div>

        </div>
    )
}

export default Die