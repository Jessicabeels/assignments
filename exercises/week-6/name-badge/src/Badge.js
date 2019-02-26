import React from 'react'

const Badge = (props) => {
    return (
            <div className="badge">
                
                                <h2>Name: {props.firstName} {props.lastName}</h2>
                                <h5>Email: {props.email}</h5>
                                <h5>Phone: {props.phone}</h5>
                                <h5>Food: {props.favFood}</h5>
                                <h5>Birthplace: {props.birthplace}</h5>
                                <h5>{props.userInfo}</h5>
            </div>
        )
    }



export default Badge
