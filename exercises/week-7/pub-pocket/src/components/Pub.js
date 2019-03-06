import React from 'react'

const Pub = (props) => {


    const { title, description, authors, date,identifiers, subjects, language, publisher } = props
    return (
        <div className="pub-container">
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{authors}</p>
            <p>{date}</p>
            <p>{identifiers}</p>
            <p>Subjects: {subjects}</p>
            <p>Language: {language}</p>
            <p>Publisher: {publisher}</p>
        </div>
    )
}

export default Pub