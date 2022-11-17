import React from 'react'
const backgroundStyles = {
    display: "flex",
    justifyContent: "space-around",
    color:"white"
    }

const links = [
    {
        name:'Home',
    },
    {
        name:'Find the service',
    },
    {
        name:'Disability info'
    },
    {
        name:'Essential Docs'
    },
    {
        name:'Resources'
    }
]
function navbar() {
    return(
        <div  style={backgroundStyles} className ='bg-orange-400'>
            <span>Home</span>
            <span>Find the service</span>
            <span>Disability info</span>
            <span>Essential docs</span>
            <span>Resources</span>
            
        </div>
    )

}

export default navbar