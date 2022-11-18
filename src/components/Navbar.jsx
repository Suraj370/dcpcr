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
        <nav class="bg-gray-50 dark:bg-gray-200">
        <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
            <div class="flex items-center">
                <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                    <li>
                        <a href="#" class=" " aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" class="">Find the service</a>
                    </li>
                    <li>
                        <a href="#" class="">Disability info</a>
                    </li>
                    <li>
                        <a href="#" class="">Essential Docs</a>
                    </li>
                    <li>
                        <a href="#" class="">Resources</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )

}

export default navbar