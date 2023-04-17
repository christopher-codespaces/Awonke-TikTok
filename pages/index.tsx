import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import  SideBar from "../components/SideBar"
import  Header from "../components/Header"
import  Add from "../components/Add"
import  Other from "../components/Other"



const Home: NextPage = () => {
  return (
    <>
       <Header/>
      <SideBar/>
      <Other/>
      <Add/>
    </>
  )
}

export default Home
