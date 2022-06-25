import React from 'react'
import { Tweet } from '../typings'
import TimeAgo from 'react-timeago'

interface props {
  tweet: Tweet
}

function Tweet({tweet}: props) {
  return (
    <div>
      <div>
        <img src={tweet.profileImg} alt="" />
        <div>
        <p>{tweet.username}</p>
        <p>@{tweet.username.replace(/\s+/g,'').toLowerCase()}</p>
        <TimeAgo date={tweet._createdAt} className='text-sm text-gray-500'/>
        </div>
      </div>
      
    </div>
  )
}

export default Tweet