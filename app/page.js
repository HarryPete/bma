'use client'

import HeroSection from './components/Herosection'
import Footer from './components/Footer'
import Founder from './components/Founder'
import EOWCourse from './components/EOWCourse'
import FAQSection from './components/FAQSection'
import Feedback from './components/Feedback'
import Features from './components/Features'
import NavigationBar from './components/NavigationBar'


const Home = () =>
{
    return(
        <div className='md:text-base text-sm leading-relaxed'>
          <NavigationBar/>
          <HeroSection/>
          <Features/>
          <EOWCourse/>
          <Feedback/>
          <Founder/>
          <FAQSection/>
          <Footer/>
        </div>
    )
}

export default Home

