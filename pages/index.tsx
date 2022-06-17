import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Tweeter 2.0</title>
       
      </Head>

      <main>
        {/* Sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* widgets */}
      </main>
    </div>
  )
}

export default Home
