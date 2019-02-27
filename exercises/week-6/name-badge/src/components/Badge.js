import React from 'react'

const Badge = (props) => {
    return (
            <div className="badge">
                
                                <h1>{props.firstName} {props.lastName}</h1>
                                <h5>Email: {props.email}</h5>
                                <h5>Phone: {props.phone}</h5>
                                <h5>Favorite Food: {props.favFood}</h5>
                                <h5>Birthplace: {props.birthplace}</h5>
                                <h5>{props.userInfo}</h5>
            </div>
        )
    }



export default Badge
