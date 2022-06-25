import React from 'react'
import { Tweet } from '../typings'
import TimeAgo from 'react-timeago'

interface props {
  tweet: Tweet
}

function Tweet({tweet}: props) {
  return (
    <div className='flex flex-col p-5 space-x-3 border-gray-100 border-y'>
      <div className='flex space-x-3'>
        <img className='object-cover w-10 h-10 rounded-full' src={tweet.profileImg} alt="" />
        <div>
          <div className='flex items-center space-x-1'>
            <p className='mr-1 font-bold'>{tweet.username}</p>
            <p className='hidden text-sm text-gray-500 sm:inline'>@{tweet.username.replace(/\s+/g,'').toLowerCase()}</p>
            <TimeAgo date={tweet._createdAt} className='text-sm text-gray-500'/>
          </div>
          <p className='pt-1'>{tweet.text}</p>
          {tweet.image && <img src={tweet.image} alt="" className='object-cover m-5 mb-1 ml-0 rounded-lg shadow-sm max-h-60'/> }
        </div>
      </div>
    </div>
  )
}

export default Tweet