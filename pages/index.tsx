import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Tweeter 2.0</title>
       
      </Head>

      <h1>Hello world!</h1>
    </div>
  )
}

export default Home
