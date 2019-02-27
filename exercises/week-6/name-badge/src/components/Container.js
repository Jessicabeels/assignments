import React from 'react'
import Badge from './Badge.js'

const Container = props => {
    const mappedBadge = props.badges.map((person, key) => 
    //(...badges)
                                        <Badge 
                                                key = {key}
                                                firstName ={person.firstName}
                                                lastName = {person.lastName}
                                                phone = {person.phone}
                                                email = {person.email}
                                                favFood={person.favFood}
                                                birthplace ={person.birthplace}
                                                userInfo = {person.userInfo}/>)
                                                

    return (
        
        <div className="badge-print">
             {mappedBadge} 
             
        </div>
       
    )
    
}
export default Container