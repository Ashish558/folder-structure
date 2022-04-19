import React from 'react'
import ActivityCategories from './components/ActivityCategories'
import ActivityTypes from './components/ActivityTypes'
import Hero from './components/Hero'

// will render index.js files in ./ActivityCategories, ./ActivityTypes, ./TrendingThemes, ./Messages.
const Home = () => {
  
   return (
      <div>
         <Hero />
         <ActivityCategories />
         <ActivityTypes />
      </div>
   )
}

export default Home