import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import  Accounts from "../components/Accounts"
import  SignUp from "../components/SignUp"
import  Add from "../components/Add"
import  Other from "../components/Other"
import PlayVideo from "../components/PlayVideo"



const Home: NextPage = () => {
  return (
    <>
      <PlayVideo/>
{/*       <SideBar/>
      <Other/>
      <Add/> */}
    </>
  )
}

export default Home
