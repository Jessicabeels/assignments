import React from 'react'


const Search = (props) => {

const {title, authors, downloadUrl, publisher, topics, description } = props


// let descript= description.toLowerCase()



//lowercase all
//turn into an array based on period placement, 
//and then capitalize only first letter of first elemt of array. 



return (
    <div className="pub-container">
    
        <h1>{title}</h1>
        <h4>Authors: {authors}</h4>
        <a target="_new" href={downloadUrl}>Learn more</a>
        <p>Publisher: {publisher}</p>
        <p>Topics: {topics}</p>
        <p>Description: {description}</p>
        {/* <p>{descript}</p> */}
    </div>
)


}

export default Search