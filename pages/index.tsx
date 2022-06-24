import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'

interface props {
  tweets: Tweet[]
}

const Home: NextPage = ({ tweets }: props) => {
  
  return (
    <div className="max-h-screen mx-auto overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Twitter 2.0</title>
       
      </Head>

      <main className='grid grid-cols-9'>
        <Sidebar />
      
        <Feed  tweets={tweets}/>

        <Widgets />
      </main>
    </div>
  )
}

export default Home

// server side rendering (next.js)
export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  
  return {
    props: {
      tweets
    }
  }
}