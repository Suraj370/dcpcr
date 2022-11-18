import React from 'react'

function Navbar() {
  return (
    <nav class="bg-gray-200">
    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div class="flex items-center justify-between">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    Home
                </li>
                <li>
                   Find the service
                </li>
                <li>
                    Disability info
                </li>
                <li>
                    Essential Docs
                </li>
                <li>
                   Resources
                </li>
            </ul>
            <div>Hi</div>
        </div>
    </div>
</nav>
  )
}

export default Navbar