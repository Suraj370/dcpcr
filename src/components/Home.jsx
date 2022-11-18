import React from 'react'

const backgroundStyles = {
  padding: "50px",
  margin: "30px",
  }

function Home() {
  return (
    <div className='text-center  content-center text-xl ' 
    style={backgroundStyles}>
      <div className='font-bold' >
        <h1>Child Rights</h1></div>
        <h2  >The Delhi Commission for Protection Of Child Rights has attempted to create extensive repository of all existing 
            entilements and relevant information which could be of benefit to Persons with Disabilities & their caregivers in Delhi.This
            website aims to address the information asymmetry by creating awareness about the rights of Persons with Disabilities,
            especially Children with Special Needs or Children who have parents with disabilities & assist them in understanding the 
            means of leveraging rightful entilements for their own benefit.  
        </h2>
        <h2>
            Click to know your rights and entilements
        </h2>
        <button class="bg-black  text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
    </div>
    
  )
}

export default Home