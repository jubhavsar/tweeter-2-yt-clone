import React from 'react'
import { Tweet } from '../typings'

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
        </div>
      </div>
      
    </div>
  )
}

export default Tweet