import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import  SignUp from "../components/SignUp"
import  LogIn from "../components/LogIn"


const Home: NextPage = () => {
  return (
    <>
      
      <LogIn/>
    </>
  )
}

export default Home
