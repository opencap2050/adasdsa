import type { NextPage } from 'next'

import Hero from '../components/landing/Hero'
import FAQs from '../components/landing/FAQs'
// import Features from '../components/landing/Features'
import Cta from '../components/landing/Cta'
import Features_One from '../components/landing/Features_One'
import Footer from '../components/landing/Footer'
import Stats from '../components/landing/Stats'

const Home: NextPage = () => {
  // T-12 Add a loading screen
  return (
		<div>
			<Hero />
      <Stats />
			<Features_One />
      <Cta />
			<FAQs />
      <Footer />
    </div>
  )
}

export default Home
