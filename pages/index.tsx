import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import  SignUp from "../components/SignUp"


const Home: NextPage = () => {
  return (
    <>
      
      <SignUp/>
    </>
  )
}

export default Home
