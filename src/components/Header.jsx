import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div>
      <div class="flex justify-end bg-gray-50 dark:bg-gray-200   ">
        <div>Screen Reader Access</div>
      </div>
      <div className='flex p-5 justify-between'>
      <button class="bg-black  text-white bg-gray-50 font-bold py-2 px-4 rounded">
            DCPCR
      </button>
      <button class="bg-black  bg-gray-50 text-white font-bold py-2 px-4 rounded">
            Child Rights
      </button>
    </div>
    <Navbar/> 
 
    </div>
  )
}

export default Header