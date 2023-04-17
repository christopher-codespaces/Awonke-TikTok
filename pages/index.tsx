import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import  Accounts from "../components/Accounts"


const Home: NextPage = () => {
  return (
    <>
      
      <Accounts/>
    </>
  )
}

export default Home
