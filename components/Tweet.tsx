import React, { useEffect, useState } from 'react'
import { Tweet } from '../typings'
import TimeAgo from 'react-timeago'
import {
  ChatAlt2Icon,
  SwitchHorizontalIcon,
  HeartIcon,
  UploadIcon,
} from '@heroicons/react/solid'
import { fetchComments } from '../utils/fetchComments'

interface props {
  tweet: Tweet
}

function Tweet({tweet}: props) {
  const [comments, setComments] = useState([]);

  const refreshComment = async () => {
    const comments: Comment[] = await fetchComments(tweet._id)
    setComments(comments);
  }

  useEffect( () => {
    refreshComment()
  }, [])
  console.log(comments);
  
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
        <div className='flex justify-between m-5'>
          <div className='flex items-center space-x-3 text-gray-400 cursor-pointer'>
            <ChatAlt2Icon className='w-5 h-5'/>
            <p>5</p>
          </div>
          <div className='flex items-center space-x-3 text-gray-400 cursor-pointer'>
            <SwitchHorizontalIcon className='w-5 h-5'/>
          </div>
          <div className='flex items-center space-x-3 text-gray-400 cursor-pointer'>
            <HeartIcon className='w-5 h-5'/>
          </div>
          <div className='flex items-center space-x-3 text-gray-400 cursor-pointer'>
            <UploadIcon className='w-5 h-5'/>
          </div>
        

      </div>
    </div>
  )
}

export default Tweet