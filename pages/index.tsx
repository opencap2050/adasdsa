import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Hero from '../components/landing/Hero.tsx';

const Home: NextPage = () => {
  return (
		<Hero />
  )
}

export default Home
