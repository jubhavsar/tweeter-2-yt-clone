import React from 'react'
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/solid';

function TweetBox() {
  return (
    <div>
      <img className='object-cover mt-4 rounded-full h-14 w-14' src="https://links.papareact.com/gll" alt="" />
      <div>
        <form>
          <input type="text" placeholder="What's Happening"/>
          <div>
            <div className='flex space-x-2 text-tweeter'>
              <PhotographIcon className='w-5 h-5'/>
              <SearchCircleIcon className='w-5 h-5'/>
              <EmojiHappyIcon className='w-5 h-5'/>
              <CalendarIcon className='w-5 h-5'/>
              <LocationMarkerIcon className='w-5 h-5'/>
            </div>
          </div>
          <button className='px-5 py-2 font-bold text-white rounded-full bg-tweeter'>
            Tweet
          </button>
        </form>
      </div>
    </div>
  )
}

export default TweetBox