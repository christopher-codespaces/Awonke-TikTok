import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Login from "../components/login"

const Home: NextPage = () => {
  return (
      <>
{/*          Got this component from one of the projects i worked on and wanted to change the styling to fit your design but typescript gave me issues now using classes and divs */}
        <Login/>
      </>
  )
}

export default Home