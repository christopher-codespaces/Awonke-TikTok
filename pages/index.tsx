import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import  Accounts from "../components/Accounts"
import  SignUp from "../components/SignUp"
import  Add from "../components/Add"
import  Other from "../components/Other"



const Home: NextPage = () => {
  return (
    <>
       <Accounts/>
{/*       <SideBar/>
      <Other/>
      <Add/> */}
    </>
  )
}

export default Home
