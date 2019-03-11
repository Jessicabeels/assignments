import React from 'react'
import { withPubs } from '../Context/PubProvider'

const StuffSaved = (props) => {

const {title, authors, downloadUrl, publisher, topics, description } = props


return (
    <div className="saved-container">
        <h1>{title}</h1>
        <h4>Authors: {authors}</h4>
        <a target="_new" href={downloadUrl}>Learn more</a>
        <p>Publisher: {publisher}</p>
        <p>Topics: {topics}</p>
        <p>Description: {description}</p>

    </div>
)





}


export default withPubs(StuffSaved)