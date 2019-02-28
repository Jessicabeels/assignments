import React from 'react'

const Badge = (props) => {
    const {firstName, lastName, phone, birthplace, userInfo, email, favFood} = props
    return (
            <div className="badge">
                
                                <h1>{firstName} {lastName}</h1>
                                <h5>Email: {email}</h5>
                                <h5>Phone: {phone}</h5>
                                <h5>Favorite Food: {favFood}</h5>
                                <h5>Birthplace: {birthplace}</h5>
                                <h5>{userInfo}</h5>
            </div>
        )
    }



export default Badge
