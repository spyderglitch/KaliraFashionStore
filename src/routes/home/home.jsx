import React from 'react'
import Features from '../../components/Features/Features';

// import './Home.scss';
import { Slider } from '../../components/Slider/Slider';

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Features />
    </div>
  )
}

export default Home