import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Tweeter 2.0</title>
       
      </Head>

      <main>
        {/* Sidebar */}
        <Sidebar />
        {/* feed */}
        {/* widgets */}
      </main>
    </div>
  )
}

export default Home
