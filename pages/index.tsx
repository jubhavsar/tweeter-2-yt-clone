import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import Widget from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Tweeter 2.0</title>
       
      </Head>

      <main>
        <Sidebar />
      
        <Feed />

        <Widgets />
      </main>
    </div>
  )
}

export default Home
