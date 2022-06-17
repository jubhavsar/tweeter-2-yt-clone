import React from 'react'

function TweetBox() {
  return (
    <div>
      <img className='object-cover mt-4 rounded-full h-14 w-14' src="https://links.papareact.com/gll" alt="" />
      <div>
        <form>
          <input type="text" placeholder="What's Happening" />
          <div>
            <div>{/* Icons */}</div>
          </div>
          <button>
            Tweet
          </button>
        </form>
      </div>
    </div>
  )
}

export default TweetBox