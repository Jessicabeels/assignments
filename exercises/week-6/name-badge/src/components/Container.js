import React from 'react'
import Badge from './Badge.js'

const Container = props => {
    const mappedBadge = props.badges.map((person, i) => 
    //(...badges)
                                        <Badge 
                                                key = {i}
                                                // firstName ={person.firstName}
                                                // lastName = {person.lastName}
                                                // phone = {person.phone}
                                                // email = {person.email}
                                                // favFood={person.favFood}
                                                // birthplace ={person.birthplace}
                                                // userInfo = {person.userInfo}
                                                {... person}
                                                />)
                                                

    return (
        
        <div className="badge-print">
             { mappedBadge } 
             
        </div>
       
    )
    
}
export default Container