import React from 'react'
import {
  RefreshIcon
} from '@heroicons/react/solid'


function Feed() {
  return (
    <div className='col-span-7 lg:col-span-5 border-x'>
      <div className='flex items-center justify-between'>
      <h1 className='p-5 pb-0 text-xl font-bold'> Home </h1>
      <RefreshIcon className='w-8 h-8 mt-5 mr-5 transition-all duration-500 ease-out cursor-pointer text-tweeter hover:rotate-180 active:scale-125'/>
      </div>
    </div>
  )
}

export default Feed