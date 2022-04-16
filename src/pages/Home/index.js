import React from 'react'
import ActivityCategories from './components/ActivityCategories'
import ActivityTypes from './components/ActivityTypes'

// will render index.js files in ./ActivityCategories, ./ActivityTypes, ./TrendingThemes, ./Messages.
const Home = () => {
  
   return (
      <div>
         <ActivityCategories />
         <ActivityTypes />
      </div>
   )
}

export default Home